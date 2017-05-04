# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from seo import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.SEOPage)
class SEOPageTranslationOptions(BaseTranslationOptions):
    fields = models.SEOPage.translation_fields
