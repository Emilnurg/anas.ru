# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.decorators import register

from core import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Page)
class PageTranslationOptions(BaseTranslationOptions):
    fields = models.Page.translation_fields


@register(models.Gallery)
class GalleryTranslationOptions(BaseTranslationOptions):
    fields = models.Gallery.translation_fields


@register(models.GalleryPhoto)
class GalleryPhotoTranslationOptions(BaseTranslationOptions):
    fields = models.GalleryPhoto.translation_fields
    required_languages = {'default': ()}


@register(models.HomeAdvantage)
class HomeAdvantageTranslationOptions(BaseTranslationOptions):
    fields = models.HomeAdvantage.translation_fields


@register(models.HomeCatalog)
class HomeCatalogTranslationOptions(BaseTranslationOptions):
    fields = models.HomeCatalog.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.HomeSlide)
class HomeSlideTranslationOptions(BaseTranslationOptions):
    fields = models.HomeSlide.translation_fields
