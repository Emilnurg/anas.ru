# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin

from core import models
from snippets.admin import BaseModelAdmin


@admin.register(models.Page)
class PageAdmin(BaseModelAdmin, TranslationAdmin):
    """Простые страницы"""
    fields = models.Page().collect_fields()
    list_display = ('id', 'title', 'slug', 'ordering', 'status', 'created')
    list_display_links = ('id', 'title')
    list_editable = ('status', 'ordering')
    list_filter = ('status',)
    ordering = ('ordering', 'title')
    search_fields = ('=id', 'title', 'slug', 'body')

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.Gallery)
class GalleryAdmin(BaseModelAdmin, TranslationAdmin):
    """Галереи"""
    fields = models.Gallery().collect_fields()
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'created')
    list_display_links = ('image_thumb', 'title')
    list_editable = ('status', 'ordering')
    list_filter = ('status',)
    ordering = ('ordering', 'title')
    search_fields = ('=id', 'title', 'body')

    class Media:
        js = ('admin/js/translit.js',)
