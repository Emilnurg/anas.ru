# -*- coding: utf-8 -*-
from django.contrib import admin

from image_cropping import ImageCroppingMixin

from base.admin import BaseArticleAdmin, BaseArticleSectionInline
from press import models
from snippets.admin.admin import ModelTranlsationFieldsetsMixin


class NewsSectionInline(BaseArticleSectionInline):
    """Секции новости"""
    fields = models.NewsSection().collect_fields()
    model = models.NewsSection


@admin.register(models.News)
class NewsAdmin(ImageCroppingMixin, ModelTranlsationFieldsetsMixin, BaseArticleAdmin):
    """Новости и события"""
    inlines = (NewsSectionInline,)

    class Media:
        js = ('admin/js/translit.js',)
