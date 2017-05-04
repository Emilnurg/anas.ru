# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.translator import TranslationOptions


class BaseTranslationOptions(TranslationOptions):
    required_languages = (settings.DEFAULT_LANGUAGE,)
    empty_values = ''


def get_model_translation_fields(model, with_original_fields=True):
    """
    Получает список всех переводимых полей для модели
    :param model - модель, для которой ищутся переводимые поля
    :param with_original_fields - добавляет оригинальные поля переводов (fallback поля)
    """
    fields = []
    if with_original_fields:
        fields.extend(model.translation_fields)

    for language in settings.LANGUAGE_CODES:
        fields.extend('%s_%s' % (x, language) for x in model.translation_fields)

    return fields
