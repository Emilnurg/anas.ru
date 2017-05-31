# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from support import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.SupportCategory)
class SupportCategoryTranslationOptions(BaseTranslationOptions):
    fields = models.SupportCategory.translation_fields


@register(models.SupportSection)
class SupportSectionTranslationOptions(BaseTranslationOptions):
    fields = models.SupportSection.translation_fields


@register(models.SupportQuestion)
class SupportQuestionTranslationOptions(BaseTranslationOptions):
    fields = models.SupportQuestion.translation_fields
