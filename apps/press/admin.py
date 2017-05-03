# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationStackedInline

from base.admin import BaseArticleAdmin
from press import models


class NewsSectionInline(TranslationStackedInline):
    """Секции новости"""
    extra = 0
    fields = models.NewsSection().collect_fields()
    model = models.NewsSection
    ordering = ('ordering',)


class NewsRelatedInline(admin.TabularInline):
    """Связанные новости"""
    extra = 0
    fk_name = 'from_news'
    model = models.News.related_news.through
    raw_id_fields = ('to_news',)


@admin.register(models.News)
class NewsAdmin(BaseArticleAdmin):
    """Новости и события"""
    fields = models.News().collect_fields()
    inlines = (NewsSectionInline, NewsRelatedInline)

    class Media:
        js = ('admin/js/translit.js',)
