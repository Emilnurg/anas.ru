# -*- coding: utf-8 -*-
from django.db.models.signals import post_save, pre_delete

from education.models import Course
from search.indexes.courses import delete_course_from_index, index_new_course
from snippets.models.enumerates import StatusEnum


def product_update_search_index(sender, instance, **kwargs):
    if hasattr(instance, 'deny_search_reindex'):
        return

    if instance.status == StatusEnum.PUBLIC:
        index_new_course(instance)
    else:
        delete_course_from_index(instance)


def delete_product(sender, instance, **kwargs):
    delete_course_from_index(instance)


post_save.connect(product_update_search_index, Course, weak=False)
pre_delete.connect(delete_product, Course, weak=False)
