# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin
from mptt.admin import MPTTModelAdmin

from catalog import models


@admin.register(models.ProductCategory)
class ProductAdmin(TranslationAdmin, MPTTModelAdmin):
    """Категории продуктов"""
    list_display_links = ('image_thumb', 'title')
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'created')
    search_fields = ('=id', 'title', 'slug', 'image')
    list_filter = ('status', 'parent')
    list_editable = ('status', 'ordering')
    fields = models.ProductCategory().collect_fields()
    ordering = ('ordering', 'title')

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.Product)
class ProductAdmin(TranslationAdmin):
    """Продукты"""
    list_display_links = ('image_thumb', 'title')
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'created')
    search_fields = ('=id', 'title', 'slug', 'image')
    list_filter = ('status',)
    list_editable = ('status', 'ordering')
    fields = models.Product().collect_fields()
    ordering = ('ordering', 'title')

    class Media:
        js = ('admin/js/translit.js',)
