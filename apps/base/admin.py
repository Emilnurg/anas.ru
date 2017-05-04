# -*- coding: utf-8 -*-
from modeltranslation.admin import TranslationAdmin

from base import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


class BaseArticleAdmin(BaseModelAdmin, TranslationAdmin):
    """Базовая админ.часть для новостей и событий"""
    date_hierarchy = 'publish_date'
    list_display = ('id', 'image_thumb', 'title', 'publish_date', 'ordering', 'status', 'created')
    list_display_links = ('id', 'image_thumb', 'title')
    list_editable = ('status', 'ordering', 'publish_date')
    ordering = ('-publish_date', 'ordering')
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.BaseArticle)

    class Media:
        js = ('admin/js/translit.js',)
