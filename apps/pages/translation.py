# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from pages import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.AboutPage)
class AboutPageTranslationOptions(BaseTranslationOptions):
    fields = (
        'title', 'subtitle', 'quote_image', 'quote', 'quoted_person', 'main_body',
        'guarantee_title', 'guarantee_body', 'questions_title', 'questions_subtitle'
    )


@register(models.ContactsPage)
class ContactsPageTranslationOptions(BaseTranslationOptions):
    fields = (
        'title', 'address', 'questions_title', 'questions_subtitle', 'map_x', 'map_y', 'map_zoom'
    )


@register(models.HomePage)
class HomePageTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'subtitle')


@register(models.HomeAdvantage)
class HomeAdvantageTranslationOptions(BaseTranslationOptions):
    fields = ('title',)
