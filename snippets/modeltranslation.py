# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.translator import TranslationOptions


class BaseTranslationOptions(TranslationOptions):
    required_languages = (settings.DEFAULT_LANGUAGE,)
    empty_values = ''
