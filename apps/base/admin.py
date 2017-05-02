# -*- coding: utf-8 -*-
from modeltranslation.admin import TranslationAdmin


class BaseArticleAdmin(TranslationAdmin):
    """Базовая админ.часть для новостей и событий"""
    list_display_links = ('image_thumb', 'title')
    list_display = ('image_thumb', 'title', 'publish_date', 'ordering', 'status', 'created')
    search_fields = ('=id', 'title', 'slug', 'excerpt', 'image', 'body')
    date_hierarchy = 'publish_date'
    list_filter = ('status',)
    list_editable = ('status', 'ordering', 'publish_date')
    ordering = ('-publish_date', 'ordering')

    class Media:
        js = ('admin/js/translit.js',)
