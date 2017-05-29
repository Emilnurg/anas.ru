# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.decorators import register

from pages import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.AboutAdvantage)
class AboutAdvantageTranslationOptions(BaseTranslationOptions):
    fields = models.AboutAdvantage.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.AboutPage)
class AboutPageTranslationOptions(BaseTranslationOptions):
    fields = models.AboutPage.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.ContactsPage)
class ContactsPageTranslationOptions(BaseTranslationOptions):
    fields = models.ContactsPage.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.ServiceCenterPage)
class ServiceCenterPageTranslationOptions(BaseTranslationOptions):
    fields = models.ServiceCenterPage.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}
