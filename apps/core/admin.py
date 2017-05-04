# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin

from core import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.Page)
class PageAdmin(BaseModelAdmin, TranslationAdmin):
    """Простые страницы"""
    fields = models.Page().collect_fields()
    list_display = ('id', 'title', 'slug', 'ordering', 'status', 'created')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug'] + get_model_translation_fields(models.Page)

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.Gallery)
class GalleryAdmin(BaseModelAdmin, TranslationAdmin):
    """Галереи"""
    fields = models.Gallery().collect_fields()
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'created')
    list_display_links = ('image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.Gallery)

    class Media:
        js = ('admin/js/translit.js',)
