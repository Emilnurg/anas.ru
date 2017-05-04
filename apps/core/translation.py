# -*- coding: utf-8 -*-
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
