# coding: utf-8
import os
from copy import deepcopy

import requests
from django.conf import settings

from snippets.utils.dicts import mergedicts

ALL_INDEXES = ('articles', 'courses', 'products')


def get_standard_es_settings(**kwargs):
    with open(
        os.path.join(settings.PROJECT_DIR, 'deploy', 'es_stopwords.txt'),
        'r'
    ) as sw_file:
        conf = {
            'analysis': {
                'analyzer': {
                    'common_analyzer': {
                        'type': 'custom',
                        'tokenizer': 'standard',
                        'filter': [
                            'lowercase',
                            'russian_morphology',
                            'english_morphology',
                            'my_stopwords'
                        ]
                    }
                },
                'filter': {
                    'my_stopwords': {
                        'type': 'stop',
                        'stopwords': ','.join(sw_file.read().split())
                    }
                }
            }
        }
    if kwargs:
        conf = mergedicts(conf, kwargs)
    return conf


def elasticsearch_indexes_config():
    from search.indexes.articles import config_index_articles
    from search.indexes.courses import config_index_courses
    from search.indexes.products import config_index_products

    config_index_articles()
    config_index_courses()
    config_index_products()


def cleanes():
    """Flushes all ElasticSearch indexes"""
    for index in ALL_INDEXES:
        requests.delete(
            'http://{host}:{port}/{index}'.format(index=index, **settings.SEARCH)
        )


def synces_data():
    """Syncs ElasticSearch index with DB data"""
    from search.indexes.articles import sync_articles
    from search.indexes.courses import sync_courses
    from search.indexes.products import sync_products

    sync_articles()
    print('Synced articles ES index')

    sync_courses()
    print('Synced courses ES index')

    sync_products()
    print('Synced products ES index')


def optimizees():
    """Optimizes given ElasticSearch indexes"""
    config = deepcopy(settings.SEARCH)
    for index in ALL_INDEXES:
        config['index'] = index
        requests.post(
            'http://{host}:{port}/{index}/_optimize'.format(**config)
        )
        print('Optimized %s ES index' % index)
