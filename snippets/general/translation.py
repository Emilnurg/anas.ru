# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.decorators import register

from snippets.general import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.DbConfig)
class DbConfigTranslationOptions(BaseTranslationOptions):
    fields = models.DbConfig.translation_fields


@register(models.MenuItem)
class MenuItemTranslationOptions(BaseTranslationOptions):
    fields = models.MenuItem.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('url', 'title'), 'default': ()}
