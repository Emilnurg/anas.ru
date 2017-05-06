# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from snippets.modeltranslation import BaseTranslationOptions
from snippets.seo import models


@register(models.SEOPage)
class SEOPageTranslationOptions(BaseTranslationOptions):
    fields = models.SEOPage.translation_fields
    required_languages = []
