# -*- coding: utf-8 -*-
from django.utils.translation import ugettext_lazy as _

from modeltranslation.admin import TranslationAdmin, TranslationStackedInline

from base import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


class BaseArticleAdmin(BaseModelAdmin, TranslationAdmin):
    """Базовая админ.часть для новостей и событий"""
    date_hierarchy = 'publish_date'
    group_fieldsets = True
    list_display = ('id', 'image_thumb', 'title', 'publish_date', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'image_thumb', 'title')
    list_editable = ('status', 'ordering', 'publish_date')
    ordering = ('ordering', '-publish_date')
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.BaseArticle)
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


class BaseArticleSectionInline(TranslationStackedInline):
    """Базовая админ.часть для входимой админки секций статей"""
    extra = 0
    ordering = ('ordering',)
    suit_classes = 'suit-tab suit-tab-sections'
    readonly_fields = ('created', 'updated')
