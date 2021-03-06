# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin, TranslationTabularInline

from core import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.Page)
class PageAdmin(BaseModelAdmin, TranslationAdmin):
    """Простые страницы"""
    fields = models.Page().collect_fields()
    list_display = ('id', 'title', 'slug', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug'] + get_model_translation_fields(models.Page)

    class Media:
        js = ('admin/js/translit.js',)


class GalleryPhotoInline(TranslationTabularInline):
    """Фото галереи"""
    extra = 0
    fields = models.GalleryPhoto().collect_fields()
    model = models.GalleryPhoto
    readonly_fields = ('created', 'updated')


@admin.register(models.Gallery)
class GalleryAdmin(BaseModelAdmin, TranslationAdmin):
    """Галереи"""
    fields = models.Gallery().collect_fields()
    inlines = (GalleryPhotoInline,)
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.Gallery)

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.HomeAdvantage)
class HomeAdvantageAdmin(BaseModelAdmin, TranslationAdmin):
    """Преимущества на главной странице"""
    group_fieldsets = True
    list_display = ('id', 'title', 'icon', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    save_as = True
    search_fields = ['=id', 'icon'] + get_model_translation_fields(models.HomeAdvantage)


class HomeCatalogProductInline(admin.TabularInline):
    """Продукты каталога на главной странице"""
    extra = 0
    fields = models.HomeCatalogProduct().collect_fields()
    model = models.HomeCatalogProduct
    ordering = ('ordering',)
    raw_id_fields = ('product',)
    readonly_fields = ('created', 'updated')


class HomeCatalogManufacturerInline(admin.TabularInline):
    """Производители каталога на главной странице"""
    extra = 0
    fields = models.HomeCatalogManufacturer().collect_fields()
    model = models.HomeCatalogManufacturer
    ordering = ('ordering',)
    readonly_fields = ('created', 'updated')


@admin.register(models.HomeCatalog)
class HomeCatalogAdmin(BaseModelAdmin, TranslationAdmin):
    """Каталоги на главной странице"""
    group_fieldsets = True
    inlines = (HomeCatalogProductInline, HomeCatalogManufacturerInline)
    list_display = ('id', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    save_as = True
    search_fields = ['=id'] + get_model_translation_fields(models.HomeCatalog)


@admin.register(models.HomeSlide)
class HomeSlideAdmin(BaseModelAdmin, TranslationAdmin):
    """Слайды на главной"""
    group_fieldsets = True
    list_display = ('id', 'image_thumb', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    save_as = True
    search_fields = ['=id'] + get_model_translation_fields(models.HomeSlide)
