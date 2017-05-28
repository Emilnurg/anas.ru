# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.decorators import register

from base.translation import BaseArticleTranslationOptions
from knowledge import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Article)
class ArticleTranslationOptions(BaseArticleTranslationOptions):
    fields = models.Article.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.ArticleCategory)
class ArticleCategoryTranslationOptions(BaseTranslationOptions):
    fields = models.ArticleCategory.translation_fields


@register(models.ArticleSection)
class ArticleSectionTranslationOptions(BaseTranslationOptions):
    fields = models.ArticleSection.translation_fields
    required_languages = {'default': ()}
