# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from dicts import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.City)
class CityTranslationOptions(BaseTranslationOptions):
    fields = ('title',)


@register(models.SiteConfiguration)
class SiteConfigurationTranslationOptions(BaseTranslationOptions):
    fields = ()


@register(models.SocialNetwork)
class SocialNetworkTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'url')
