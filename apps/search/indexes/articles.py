# -*- coding: utf-8 -*-
import math
import re
import requests
import ujson

from django.conf import settings
from django.db.models import Prefetch
from django.utils import translation

from elasticsearch import Elasticsearch, TransportError

from knowledge.models import Article, ArticleCategory
from search.exceptions import SearchError
from search.utils import get_standard_es_settings


def config_index_articles():
    requests.put(
        'http://{host}:{port}/articles'.format(**settings.SEARCH),
        ujson.dumps({'settings': get_standard_es_settings()})
    )

    for language in settings.LANGUAGE_CODES:
        requests.put(
            'http://{host}:{port}/articles/article_{language}/_mapping'.format(
                language=language, **settings.SEARCH
            ),
            ujson.dumps({
                'article_%s' % language: {
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
                        'ordering': {
                            'type': 'integer',
                            'store': False,
                            'index': 'not_analyzed'
                        },
                        'publish_date': {
                            'type': 'integer',
                            'store': False,
                            'index': 'not_analyzed'
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

    requests.post('http://{host}:{port}/articles/_open'.format(**settings.SEARCH))


def bind_article_body(target):
    """
    Binds all indexable Article schema attributes
    to JSON elasticsearch index
    :param target: Article instance
    """
    body = {
        'suggest': [{
            'input': tuple(
                filter(lambda x: x, re.split(r'[\s_\-?,.+|()]', target.title.lower()))
            ),
            'weight': 3
        }, {
            'input': target.title.lower(),
            'weight': 1
        }],
        'body': target.body,
        'ordering': target.ordering,
        'publish_date': target.publish_date,
        'slug': target.slug,
        'title': target.title
    }

    if hasattr(target, 'categories_cache'):
        body['category_titles'] = ', '.join(x.title for x in target.categories_cache)
    else:
        body['category_titles'] = ', '.join(
            x.title for x in target.categories.published().iterator()
        )

    return body


def sync_articles():
    """Bulk Synchronization of articles from DB source"""
    es = Elasticsearch()
    qs = Article.objects.published()\
        .prefetch_related((
            Prefetch(
                'categories',
                queryset=ArticleCategory.objects.published(),
                to_attr='categories_cache'
            ),
        ))

    count = qs.count()
    print('%s articles to sync' % count)

    bulk_size = 1000
    for page in range(0, int(math.ceil(float(count) / float(bulk_size)))):
        objects = qs[bulk_size * page:bulk_size * (page + 1)]
        actions = list()

        for language in settings.LANGUAGE_CODES:
            translation.activate(language)

            for s in objects.iterator():

                actions.append({
                    'index': {
                        '_index': 'articles',
                        '_type': 'article_%s' % language,
                        '_id': s.id
                    }
                })
                actions.append(bind_article_body(s))

        if actions:
            result = es.bulk(index='articles', body=actions, refresh=True)
            print(result)


def index_new_article(target):
    es = Elasticsearch()

    for language in settings.LANGUAGE_CODES:
        translation.activate(language)

        es.index(
            index='articles',
            doc_type='article_%s' % language,
            id=target.id,
            body=bind_article_body(target)
        )


def delete_article_from_index(target):
    es = Elasticsearch()

    for language in settings.LANGUAGE_CODES:
        try:
            es.delete(
                index='articles',
                doc_type='article_%s' % language,
                id=target.id
            )
        except TransportError:
            pass


def search_articles(query, filters, language=settings.DEFAULT_LANGUAGE, aggregate_term_field=None,
                    **other_filters):
    """Поиск статей базы знаний"""
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
                'fields': ('title^3', 'category_titles^2', 'slug', 'body')
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
        index='articles',
        doc_type='article_%s' % language,
        body=body
    )


def suggest_articles(query, language=settings.DEFAULT_LANGUAGE, size=20):
    """Подсказки по статьям базы знаний (autocomplete)"""
    query = re.sub(r'[\s ,\-+|()]', '', query.lower())
    parts = re.split(r'[ ,+|()]', query)
    es = Elasticsearch()
    translation.activate(language)

    if len(parts) > 1:
        parts = filter(lambda x: len(x) > 2, parts)

    objects = []
    for part in parts:
        result = es.search(
            index='articles',
            doc_type='article_%s' % language,
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
