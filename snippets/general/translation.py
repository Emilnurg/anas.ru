# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from snippets.general import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.DbConfig)
class DbConfigTranslationOptions(BaseTranslationOptions):
    fields = models.DbConfig.translation_fields


@register(models.MenuItem)
class MenuItemTranslationOptions(BaseTranslationOptions):
    fields = models.MenuItem.translation_fields
