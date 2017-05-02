# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationStackedInline

from base.admin import BaseArticleAdmin
from press import models


class NewsSectionInline(TranslationStackedInline):
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
class NewsAdmin(BaseArticleAdmin):
    """Новости и события"""
    fields = models.News().collect_fields()
    inlines = (NewsSectionInline, NewsRelatedInline)

    class Media:
        js = ('admin/js/translit.js',)
