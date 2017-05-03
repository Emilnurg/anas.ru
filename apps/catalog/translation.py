# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from catalog import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.ProductCategory)
class ProductCategoryTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'body')


@register(models.Product)
class ProductTranslationOptions(BaseTranslationOptions):
    fields = ('title', 'body', 'features_body')


@register(models.Feature)
class FeatureTranslationOptions(BaseTranslationOptions):
    fields = ('title',)


@register(models.ProductFeature)
class ProductFeatureTranslationOptions(BaseTranslationOptions):
    fields = ('value',)


@register(models.ProductDocument)
class ProductDocumentTranslationOptions(BaseTranslationOptions):
    fields = ('document', 'title')


@register(models.ProductImage)
class ProductImageTranslationOptions(BaseTranslationOptions):
    fields = ('alt',)
