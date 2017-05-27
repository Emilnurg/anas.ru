# -*- coding: utf-8 -*-
from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from modeltranslation.admin import TranslationAdmin
from mptt.admin import MPTTModelAdmin

from catalog import models
from snippets.admin import BaseModelAdmin
from snippets.admin.admin import ModelTranlsationFieldsetsMixin
from snippets.modeltranslation import get_model_translation_fields
from snippets.utils.array import move_list_element_to_end


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
class ProductCategoryAdmin(BaseModelAdmin, TranslationAdmin, MPTTModelAdmin):
    """Категории продуктов"""
    group_fieldsets = True
    list_display = ('title', 'id', 'ordering', 'status', 'updated')
    list_display_links = ('title', 'id')
    list_editable = ('status', 'ordering')
    list_filter = BaseModelAdmin.list_filter + ('parent', 'level')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug'] + get_model_translation_fields(models.ProductCategory)

    class Media:
        js = ('admin/js/translit.js',)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super(ProductCategoryAdmin, self).get_fieldsets(request, obj=obj)
        for field in ('status', 'ordering'):
            move_list_element_to_end(fieldsets[0][1]['fields'], field)
        return fieldsets


@admin.register(models.Product)
class ProductAdmin(ModelTranlsationFieldsetsMixin, BaseModelAdmin, TranslationAdmin):
    """Продукты"""
    group_fieldsets = True
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    raw_id_fields = ('product_set',)
    save_as = True
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.Product)
    suit_form_tabs = (
        ('general', _('Основное')),
        ('body', _('Основной контент')),
        ('features', _('Характеристики')),
        ('training', _('Обучение')),
        ('testing', _('Тестирование')),
        ('docs', _('Документация'))
    )
    tabs_mapping = {
        '': 'general',
        'Основной контент': 'body',
        'Контент вкладки "характеристики"': 'features',
        'Контент вкладки "обучение"': 'training',
        'Контент вкладки "тестирование"': 'testing',
        'Контент вкладки "документация"': 'docs'
    }

    class Media:
        js = ('admin/js/translit.js',)
