# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationStackedInline

from base.admin import BaseArticleAdmin
from knowledge import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.ArticleCategory)
class ArticleCategoryAdmin(BaseModelAdmin):
    """Категории статей базы знаний"""
    fields = models.ArticleCategory().collect_fields()
    list_display = ('id', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug'] + get_model_translation_fields(models.ArticleCategory)

    class Media:
        js = ('admin/js/translit.js',)


class ArticleSectionInline(TranslationStackedInline):
    """Секции статьи"""
    extra = 0
    fields = models.ArticleSection().collect_fields()
    model = models.ArticleSection
    ordering = ('ordering',)


@admin.register(models.Article)
class ArticleAdmin(BaseArticleAdmin):
    """Статьи базы знаний"""
    fields = models.Article().collect_fields() + ['categories']
    filter_vertical = ('categories',)
    inlines = (ArticleSectionInline,)

    class Media:
        js = ('admin/js/translit.js',)
