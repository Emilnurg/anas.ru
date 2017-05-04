# -*- coding: utf-8 -*-
from base.models import BaseArticle
from snippets.modeltranslation import BaseTranslationOptions


class BaseArticleTranslationOptions(BaseTranslationOptions):
    fields = BaseArticle.translation_fields
