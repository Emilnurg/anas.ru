# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from base.trnaslation import BaseArticleTranslationOptions
from press import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.News)
class NewsTranslationOptions(BaseArticleTranslationOptions):
    pass


@register(models.NewsSection)
class NewsSectionTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'body')
