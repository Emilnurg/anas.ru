# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from pages import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.ContactsPage)
class ContactsPageTranslationOptions(BaseTranslationOptions):
    fields = (
        'title', 'address', 'questions_title', 'questions_subtitle', 'map_x', 'map_y', 'map_zoom'
    )
