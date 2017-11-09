# -*- coding: utf-8 -*-
from django.contrib import admin
from django.contrib.admin import TabularInline
from django.utils.translation import ugettext_lazy as _
from image_cropping import ImageCroppingMixin

from modeltranslation.admin import TranslationAdmin, TranslationTabularInline, \
    TranslationStackedInline
from mptt.admin import MPTTModelAdmin

from catalog import models, forms
from snippets.admin import BaseModelAdmin
from snippets.admin.admin import ModelTranlsationFieldsetsMixin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.Feature)
class FeatureAdmin(BaseModelAdmin, TranslationAdmin):
    """Характеристики"""
    fields = models.Feature().collect_fields()
    list_display = ('id', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.Feature)


@admin.register(models.Manufacturer)
class ManufacturerAdmin(BaseModelAdmin, TranslationAdmin):
    """Производители"""
    fields = models.Manufacturer().collect_fields()
    list_display = ('id', 'image_thumb', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.Manufacturer)

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(ModelTranlsationFieldsetsMixin, BaseModelAdmin, TranslationAdmin,
                           MPTTModelAdmin):
    """Категории продуктов"""
    group_fieldsets = True
    list_display = ('title', 'id', 'ordering', 'status', 'updated')
    list_display_links = ('title', 'id')
    list_editable = ('status', 'ordering')
    list_filter = BaseModelAdmin.list_filter + ('parent', 'level')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug'] + get_model_translation_fields(models.ProductCategory)
    suit_form_tabs = (
        ('general', _('Основное')),
        ('body', _('Основной контент')),
        ('seo', _('SEO-блок'))
    )
    tabs_mapping = {
        '': 'general',
        'Контент': 'body',
        'Заголовок seo-блока': 'seo',
        'Контент seo-блока': 'seo',
        'Изображение в seo-блоке': 'seo'
    }

    class Media:
        js = ('admin/js/translit.js',)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super(ProductCategoryAdmin, self).get_fieldsets(request, obj=obj)

        return fieldsets


class ProductDocumentInline(TranslationStackedInline):
    """Документы продукта"""
    extra = 0
    fields = models.ProductDocument().collect_fields()
    model = models.ProductDocument
    suit_classes = 'suit-tab suit-tab-docs'


class BaseProductFeatureInline(TranslationTabularInline):
    """Характеристики продукта"""
    extra = 0
    suit_classes = 'suit-tab suit-tab-features'


class ProductFeatureInline(BaseProductFeatureInline):
    """Характеристики продукта"""
    fields = models.ProductFeature().collect_fields()
    model = models.ProductFeature


class ProductFeatureMainInline(BaseProductFeatureInline):
    """Главные характеристики продукта"""
    fields = models.ProductFeatureMain().collect_fields()
    model = models.ProductFeatureMain


class ProductImageMainInline(ImageCroppingMixin, TranslationTabularInline):
    """Изображения продукта"""
    extra = 0
    fields = models.ProductImage().collect_fields()
    if 'created' in fields:
        fields.remove('created')
    if 'updated' in fields:
        fields.remove('updated')
    model = models.ProductImage
    suit_classes = 'suit-tab suit-tab-images'


class ProductRelatedInline(TabularInline):
    """Связанные продукты"""
    extra = 0
    raw_id_fields = ('to_product',)
    fk_name = 'from_product'
    model = models.Product.related_products.through
    suit_classes = 'suit-tab suit-tab-related'
    verbose_name = _('Связанный продукт')
    verbose_name_plural = _('Связанные продукты')


@admin.register(models.Product)
class ProductAdmin(ModelTranlsationFieldsetsMixin, ImageCroppingMixin, BaseModelAdmin,
                   TranslationAdmin):
    """Продукты"""
    filter_horizontal = ('categories',)
    form = forms.ProductModelForm
    group_fieldsets = True
    inlines = (
        ProductImageMainInline, ProductFeatureMainInline, ProductFeatureInline,
        ProductDocumentInline, ProductRelatedInline
    )
    list_display = ('id', 'image_thumb', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'image_thumb', 'title')
    list_filter = BaseModelAdmin.list_filter + ('categories', 'manufacturer')
    ordering = BaseModelAdmin.ordering + ('title',)
    save_as = True
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.Product)
    suit_form_tabs = (
        ('general', _('Основное')),
        ('body', _('Основной контент')),
        ('images', _('Изображения')),
        ('features', _('Характеристики')),
        ('training', _('Обучение')),
        ('testing', _('Тестирование')),
        ('docs', _('Документация')),
        ('related', _('Связанные продукты'))
    )
    tabs_mapping = {
        '': 'general',
        'Основной контент': 'body',
        'Короткое описание': 'body',
        'Контент вкладки "характеристики"': 'features',
        'Контент вкладки "обучение"': 'training',
        'Контент вкладки "тестирование"': 'testing',
        'Контент вкладки "документация"': 'docs'
    }

    class Media:
        js = ('admin/js/translit.js',)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super(ProductAdmin, self).get_fieldsets(request, obj=obj)

        fieldsets[0][1]['fields'].append('categories')
        return fieldsets
