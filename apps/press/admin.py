# -*- coding: utf-8 -*-
from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

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
    group_fieldsets = True
    inlines = (NewsSectionInline,)
    ordering = ('ordering', '-publish_date')
    suit_form_tabs = (
        ('general', _('Основное')),
        ('body', _('Основной контент')),
        ('sections', _('Секции'))
    )
    tabs_mapping = {
        '': 'general',
        'Контент': 'body',
        'Анонс': 'body'
    }

    class Media:
        js = ('admin/js/translit.js',)
