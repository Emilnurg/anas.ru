# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin

from core import models


@admin.register(models.Page)
class PageAdmin(TranslationAdmin):
    """Простые страницы"""
    list_display = ('title', 'slug', 'ordering', 'status', 'created')
    search_fields = ('=id', 'title', 'slug', 'body')
    list_filter = ('status',)
    list_editable = ('status', 'ordering')
    fields = models.Page().collect_fields()
    ordering = ('ordering', 'title')

    class Media:
        js = ('admin/js/translit.js',)
