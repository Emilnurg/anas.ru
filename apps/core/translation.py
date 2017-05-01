# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from core import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Page)
class PageTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'body')


@register(models.Partner)
class PartnerTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'url')


@register(models.Gallery)
class GalleryTranslationOptions(BaseTranslationOptions):
    fields = ('title',)


@register(models.GalleryPhoto)
class GalleryPhotoTranslationOptions(BaseTranslationOptions):
    fields = ('alt',)
