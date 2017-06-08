# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.decorators import register

from partners import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Partner)
class PartnerTranslationOptions(BaseTranslationOptions):
    fields = models.Partner.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}
