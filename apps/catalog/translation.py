# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from catalog import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.ProductCategory)
class ProductCategoryTranslationOptions(BaseTranslationOptions):
    fields = ('title',)


@register(models.Product)
class ProductTranslationOptions(BaseTranslationOptions):
    fields = ('title',)
