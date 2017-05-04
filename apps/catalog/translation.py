# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from catalog import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.ProductCategory)
class ProductCategoryTranslationOptions(BaseTranslationOptions):
    fields = models.ProductCategory.translation_fields


@register(models.Product)
class ProductTranslationOptions(BaseTranslationOptions):
    fields = models.Product.translation_fields


@register(models.Feature)
class FeatureTranslationOptions(BaseTranslationOptions):
    fields = models.Feature.translation_fields


@register(models.ProductFeature)
class ProductFeatureTranslationOptions(BaseTranslationOptions):
    fields = models.ProductFeature.translation_fields


@register(models.ProductDocument)
class ProductDocumentTranslationOptions(BaseTranslationOptions):
    fields = models.ProductDocument.translation_fields


@register(models.ProductImage)
class ProductImageTranslationOptions(BaseTranslationOptions):
    fields = models.ProductImage.translation_fields
