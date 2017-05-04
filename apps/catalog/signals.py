# -*- coding: utf-8 -*-
from django.db.models.signals import post_save, pre_delete

from catalog.models import Product
from search.indexes.products import delete_product_from_index, index_new_product
from snippets.models.enumerates import StatusEnum


def product_update_search_index(sender, instance, **kwargs):
    if hasattr(instance, 'deny_search_reindex'):
        return

    if instance.status == StatusEnum.PUBLIC:
        index_new_product(instance)
    else:
        delete_product_from_index(instance)


def delete_product(sender, instance, **kwargs):
    delete_product_from_index(instance)


post_save.connect(product_update_search_index, Product, weak=False)
pre_delete.connect(delete_product, Product, weak=False)
