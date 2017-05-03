# -*- coding: utf-8 -*-
from modeltranslation.admin import TranslationAdmin

from snippets.admin import BaseModelAdmin


class BaseArticleAdmin(BaseModelAdmin, TranslationAdmin):
    """Базовая админ.часть для новостей и событий"""
    date_hierarchy = 'publish_date'
    list_display = ('image_thumb', 'title', 'publish_date', 'ordering', 'status', 'created')
    list_display_links = ('image_thumb', 'title')
    list_editable = ('status', 'ordering', 'publish_date')
    ordering = ('-publish_date', 'ordering')
    search_fields = ('=id', 'title', 'slug', 'excerpt', 'image', 'body')

    class Media:
        js = ('admin/js/translit.js',)
