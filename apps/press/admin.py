# -*- coding: utf-8 -*-
from django.contrib import admin

from image_cropping import ImageCroppingMixin
from modeltranslation.admin import TranslationStackedInline

from base.admin import BaseArticleAdmin
from press import models
from snippets.admin.admin import ModelTranlsationFieldsetsMixin


class NewsSectionInline(TranslationStackedInline):
    """Секции новости"""
    extra = 0
    fields = models.NewsSection().collect_fields()
    model = models.NewsSection
    ordering = ('ordering',)
    suit_classes = 'suit-tab suit-tab-sections'


@admin.register(models.News)
class NewsAdmin(ImageCroppingMixin, ModelTranlsationFieldsetsMixin, BaseArticleAdmin):
    """Новости и события"""
    inlines = (NewsSectionInline,)

    class Media:
        js = ('admin/js/translit.js',)
