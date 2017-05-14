# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from pages import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.AboutPage)
class AboutPageTranslationOptions(BaseTranslationOptions):
    fields = models.AboutPage.translation_fields


@register(models.ContactsPage)
class ContactsPageTranslationOptions(BaseTranslationOptions):
    fields = models.ContactsPage.translation_fields


@register(models.HomePage)
class HomePageTranslationOptions(BaseTranslationOptions):
    fields = models.HomePage.translation_fields
