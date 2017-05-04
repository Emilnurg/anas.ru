# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from base.translation import BaseArticleTranslationOptions
from knowledge import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Article)
class ArticleTranslationOptions(BaseArticleTranslationOptions):
    fields = models.Article.translation_fields


@register(models.ArticleCategory)
class ArticleCategoryTranslationOptions(BaseTranslationOptions):
    fields = models.ArticleCategory.translation_fields


@register(models.ArticleSection)
class ArticleSectionTranslationOptions(BaseTranslationOptions):
    fields = models.ArticleSection.translation_fields
