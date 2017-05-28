# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.decorators import register

from base.translation import BaseArticleTranslationOptions
from press import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.News)
class NewsTranslationOptions(BaseArticleTranslationOptions):
    fields = models.News.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.NewsSection)
class NewsSectionTranslationOptions(BaseTranslationOptions):
    fields = models.NewsSection.translation_fields
    required_languages = {'default': ()}
