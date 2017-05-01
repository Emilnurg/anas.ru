# -*- coding: utf-8 -*-
from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from press import models


class NewsSectionInline(admin.StackedInline):
    """Секции новости"""
    model = models.NewsSection
    extra = 0
    fields = models.NewsSection().collect_fields()


class NewsRelatedInline(admin.TabularInline):
    """Связанные новости"""
    model = models.News.related_news.through
    extra = 0
    raw_id_fields = ('to_news',)
    fk_name = 'from_news'


@admin.register(models.News)
class PageAdmin(TranslationAdmin):
    """Новости и события"""
    list_display = ('title', 'slug', 'publish_date', 'ordering', 'status', 'created')
    search_fields = ('=id', 'title', 'slug', 'excerpt', 'image')
    date_hierarchy = 'publish_date'
    list_filter = ('status',)
    list_editable = ('status', 'ordering', 'publish_date')
    fields = models.News().collect_fields()
    inlines = (NewsSectionInline, NewsRelatedInline)
    ordering = ('-publish_date', 'ordering')

    class Media:
        js = ('admin/js/translit.js',)
