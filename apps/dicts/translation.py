# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from dicts import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.City)
class CityTranslationOptions(BaseTranslationOptions):
    fields = models.City.translation_fields


@register(models.ProfessionalArea)
class ProfessionalAreaTranslationOptions(BaseTranslationOptions):
    fields = models.ProfessionalArea.translation_fields


@register(models.SocialNetwork)
class SocialNetworkTranslationOptions(BaseTranslationOptions):
    fields = models.SocialNetwork.translation_fields
