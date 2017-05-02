# -*- coding: utf-8 -*-
from snippets.modeltranslation import BaseTranslationOptions


class BaseArticleTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'excerpt', 'body')
