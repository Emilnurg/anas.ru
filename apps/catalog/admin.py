# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin
from mptt.admin import MPTTModelAdmin

from catalog import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(BaseModelAdmin, TranslationAdmin, MPTTModelAdmin):
    """Категории продуктов"""
    fields = models.ProductCategory().collect_fields()
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'created')
    list_display_links = ('image_thumb', 'title')
    list_editable = ('status', 'ordering')
    list_filter = ('status', 'parent')
    ordering = ('ordering', 'title')
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.ProductCategory)

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.Product)
class ProductAdmin(BaseModelAdmin, TranslationAdmin):
    """Продукты"""
    fields = models.Product().collect_fields()
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'created')
    list_display_links = ('image_thumb', 'title')
    list_editable = ('status', 'ordering')
    list_filter = ('status',)
    ordering = ('ordering', 'title')
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.Product)

    class Media:
        js = ('admin/js/translit.js',)
