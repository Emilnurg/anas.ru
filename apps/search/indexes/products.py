# -*- coding: utf-8 -*-
import math
import re
import requests
import ujson

from django.conf import settings
from django.db.models import Prefetch
from django.utils import translation

from elasticsearch import Elasticsearch, TransportError

from catalog.models import Product, ProductCategory, ProductFeature, ProductFeatureMain
from search.exceptions import SearchError
from search.utils import get_standard_es_settings
from snippets.models.enumerates import StatusEnum


def config_index_products():
    requests.put(
        'http://{host}:{port}/products'.format(**settings.SEARCH),
        ujson.dumps({'settings': get_standard_es_settings()})
    )

    for language in settings.LANGUAGE_CODES:
        requests.put(
            'http://{host}:{port}/products/product_{language}/_mapping'.format(
                language=language, **settings.SEARCH
            ),
            ujson.dumps({
                'product_%s' % language: {
                    '_all': {
                        'analyzer': 'russian_morphology'
                    },
                    'properties': {
                        'suggest': {
                            'type': 'completion',
                            'analyzer': 'simple',
                            'search_analyzer': 'simple',
                            'max_input_length': 50,
                            'preserve_separators': False
                        },
                        'body': {
                            'type': 'text',
                            'store': False,
                            'analyzer': 'common_analyzer'
                        },
                        'category_titles': {
                            'type': 'text',
                            'store': False,
                            'analyzer': 'common_analyzer'
                        },
                        'features': {
                            'type': 'text',
                            'store': False,
                            'analyzer': 'common_analyzer'
                        },
                        'manufacturer_title': {
                            'type': 'text',
                            'store': False,
                            'analyzer': 'common_analyzer'
                        },
                        'ordering': {
                            'type': 'integer',
                            'store': False,
                            'index': 'not_analyzed'
                        },
                        'sku': {
                            'type': 'text',
                            'store': False,
                            'analyzer': 'common_analyzer'
                        },
                        'slug': {
                            'type': 'text',
                            'store': False,
                            'analyzer': 'common_analyzer'
                        },
                        'title': {
                            'type': 'text',
                            'store': False,
                            'analyzer': 'common_analyzer',
                        }
                    }
                }
            })
        )

    requests.post('http://{host}:{port}/products/_open'.format(**settings.SEARCH))


def bind_product_body(target):
    """
    Binds all indexable Product schema attributes
    to JSON elasticsearch index
    :param target: Product instance
    """
    suggest = [{
        'input': tuple(
            filter(lambda x: x, re.split(r'[\s_\-?,.+|()]', target.title.lower()))
        ),
        'weight': 3
    }, {
        'input': target.title.lower(),
        'weight': 1
    }]

    if target.sku:
        suggest.insert(0, {
            'input': re.sub(r'[\s ,\-+|()]', '', target.sku.lower()),
            'weight': 30
        })

    body = {
        'suggest': suggest,
        'body': target.body,
        'manufacturer_title': target.manufacturer.title if target.manufacturer_id else '',
        'ordering': target.ordering,
        'sku': target.sku,
        'slug': target.slug,
        'title': target.title
    }

    if hasattr(target, 'categories_cache'):
        body['category_titles'] = ', '.join(x.title for x in target.categories_cache)
    else:
        body['category_titles'] = ', '.join(
            x.title for x in target.categories.published().iterator()
        )

    features = []
    if hasattr(target, 'features_cache'):
        body['features'] = ['%s %s' % (x.feature.title, x.value) for x in target.features_cache]
    else:
        body['features'] = [
            '%s %s' % x
            for x in target.features.published().filter(feature__status=StatusEnum.PUBLIC)
            .values_list('feature__title', 'value').iterator()
        ]

    if hasattr(target, 'features_main_cache'):
        body['features'].extend(
            ['%s %s' % (x.feature.title, x.value) for x in target.features_main_cache]
        )
    else:
        body['features'].extend([
            '%s %s' % x
            for x in target.features_main.published().filter(feature__status=StatusEnum.PUBLIC)
            .values_list('feature__title', 'value').iterator()
        ])

    body['features'] = ', '.join(features)

    return body


def sync_products():
    """Bulk Synchronization of products from DB source"""
    es = Elasticsearch()
    qs = Product.objects.published()\
        .prefetch_related(
            Prefetch(
                'categories',
                queryset=ProductCategory.objects.published(),
                to_attr='categories_cache'
            ),
            Prefetch(
                'features',
                queryset=ProductFeature.objects.published()
                .select_related('feature')
                .filter(feature__status=StatusEnum.PUBLIC),
                to_attr='features_cache'
            ),
            Prefetch(
                'features_main',
                queryset=ProductFeatureMain.objects.published()
                .select_related('feature')
                .filter(feature__status=StatusEnum.PUBLIC),
                to_attr='features_cache_main'
            )
        )

    count = qs.count()
    print('%s products to sync' % count)

    bulk_size = 1000
    for page in range(0, int(math.ceil(float(count) / float(bulk_size)))):
        objects = qs[bulk_size * page:bulk_size * (page + 1)]
        actions = list()

        for language in settings.LANGUAGE_CODES:
            translation.activate(language)

            for s in objects.iterator():

                actions.append({
                    'index': {
                        '_index': 'products',
                        '_type': 'product_%s' % language,
                        '_id': s.id
                    }
                })
                actions.append(bind_product_body(s))

        if actions:
            result = es.bulk(index='products', body=actions, refresh=True)
            print(result)


def index_new_product(target):
    es = Elasticsearch()

    for language in settings.LANGUAGE_CODES:
        translation.activate(language)

        es.index(
            index='products',
            doc_type='product_%s' % language,
            id=target.id,
            body=bind_product_body(target)
        )


def delete_product_from_index(target):
    es = Elasticsearch()

    for language in settings.LANGUAGE_CODES:
        try:
            es.delete(
                index='products',
                doc_type='product_%s' % language,
                id=target.id
            )
        except TransportError:
            pass


def search_products(query, filters, language=settings.DEFAULT_LANGUAGE, aggregate_term_field=None,
                    **other_filters):
    """Поиск продуктов"""
    es = Elasticsearch()
    translation.activate(language)

    body = {
        'from': 0,
        'size': 10000,
        'query': {},
        '_source': False
    }

    if query:
        body['query'] = {
            'multi_match': {
                'query': '*%s*' % query,
                'type': 'best_fields',
                'fuzziness': 'AUTO',
                'fields': (
                    'sku^20', 'title^3', 'category_titles^2', 'slug', 'manufacturer_title',
                    'body', 'features'
                )
            }
        }
    else:
        body['query'] = {'match_all': {}}

    if filters.get('order_by', None):
        body['sort'] = filters['order_by']

    if other_filters:
        body['filter'] = {}

    if other_filters:
        if not body['filter'].get('and'):
            body['filter'] = {'term': {}}

        for k, v in other_filters.items():
            if body['filter'].get('and'):
                body['filter']['and'].append(
                    {
                        'term': {
                            k: v
                        }
                    }
                )
            else:
                body['filter']['term'][k] = v

    if body.get('query') and body.get('filter'):
        query = body['query'].copy()
        filters = body['filter'].copy()
        del body['filter']
        del body['query']

        body['query'] = {'filtered': {
            'query': query,
            'filter': filters
        }}

    if aggregate_term_field:
        body['aggs'] = {
            'agg_terms': {
                'terms': {
                    'field': aggregate_term_field
                }
            }
        }

    return es.search(
        index='products',
        doc_type='product_%s' % language,
        body=body
    )


def suggest_products(query, language=settings.DEFAULT_LANGUAGE, size=20):
    """Подсказки по продуктам (autocomplete)"""
    query = re.sub(r'[\s ,\-+|()]', '', query.lower())
    parts = re.split(r'[ ,+|()]', query)
    es = Elasticsearch()
    translation.activate(language)

    if len(parts) > 1:
        parts = filter(lambda x: len(x) > 2, parts)

    objects = []
    for part in parts:
        result = es.search(
            index='products',
            doc_type='product_%s' % language,
            body={
                'suggest': {
                    'suggest': {
                        'prefix': part,
                        'completion': {
                            'field': 'suggest',
                            'size': size,
                            'fuzzy': False
                        }
                    }
                },
                'sort': ('_score',)
            }
        )

        if result['_shards'].get('failures'):
            raise SearchError('Ошибка подсказки')

        result = result['suggest']['suggest'][0].get('options', None)
        for r in result:
            r['_query'] = part

        # исключим дубли
        [objects.append(x['_id']) for x in result if x['_id'] not in objects]

        return tuple(map(int, objects))
