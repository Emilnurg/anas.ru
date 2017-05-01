# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from press import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.News)
class NewsTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'excerpt', 'body')


@register(models.NewsSection)
class NewsSectionTranslationOptions(BaseTranslationOptions):
    fields = ('body',)
