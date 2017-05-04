# -*- coding: utf-8 -*-
from django.db.models.signals import post_save, pre_delete

from knowledge.models import Article
from search.indexes.articles import delete_article_from_index, index_new_article
from snippets.models.enumerates import StatusEnum


def product_update_search_index(sender, instance, **kwargs):
    if hasattr(instance, 'deny_search_reindex'):
        return

    if instance.status == StatusEnum.PUBLIC:
        index_new_article(instance)
    else:
        delete_article_from_index(instance)


def delete_product(sender, instance, **kwargs):
    delete_article_from_index(instance)


post_save.connect(product_update_search_index, Article, weak=False)
pre_delete.connect(delete_product, Article, weak=False)
