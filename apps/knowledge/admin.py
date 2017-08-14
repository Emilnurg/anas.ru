# -*- coding: utf-8 -*-
from django.contrib import admin

from image_cropping import ImageCroppingMixin

from base.admin import BaseArticleAdmin, BaseArticleSectionInline
from knowledge import models
from snippets.admin import BaseModelAdmin
from snippets.admin.admin import ModelTranlsationFieldsetsMixin
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


class ArticleSectionInline(BaseArticleSectionInline):
    """Секции статьи"""
    fields = models.ArticleSection().collect_fields()
    model = models.ArticleSection


@admin.register(models.Article)
class ArticleAdmin(ImageCroppingMixin, ModelTranlsationFieldsetsMixin, BaseArticleAdmin):
    """Статьи базы знаний"""
    filter_horizontal = ('categories',)
    inlines = (ArticleSectionInline,)
    list_filter = BaseArticleAdmin.list_filter + ('categories',)

    class Media:
        js = ('admin/js/translit.js',)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super(ArticleAdmin, self).get_fieldsets(request, obj=obj)

        fieldsets[0][1]['fields'].append('categories')
        return fieldsets
