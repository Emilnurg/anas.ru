# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from snippets.general import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.DbConfig)
class DbConfigTranslationOptions(BaseTranslationOptions):
    fields = ('value',)


@register(models.MenuItem)
class MenuItemTranslationOptions(BaseTranslationOptions):
    fields = ('url', 'title', 'alt')
