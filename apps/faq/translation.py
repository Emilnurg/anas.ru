# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from faq import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.FaqSection)
class FaqSectionTranslationOptions(BaseTranslationOptions):
    fields = models.FaqSection.translation_fields


@register(models.FaqQuestion)
class FaqQuestionTranslationOptions(BaseTranslationOptions):
    fields = models.FaqQuestion.translation_fields
