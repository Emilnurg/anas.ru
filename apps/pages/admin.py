# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin
from solo.admin import SingletonModelAdmin

from pages import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.AboutPage)
class AboutPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "О компании" """
    group_fieldsets = True


@admin.register(models.ContactsPage)
class ContactsPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Контакты" """
    group_fieldsets = True


@admin.register(models.HomeAdvantage)
class HomeAdvantageAdmin(BaseModelAdmin, TranslationAdmin):
    """Преимущества на главной странице"""
    fields = models.HomeAdvantage().collect_fields()
    group_fieldsets = True
    list_display = ('id', 'title', 'icon', 'ordering', 'status', 'created')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    save_as = True
    search_fields = ['=id', 'icon'] + get_model_translation_fields(models.HomeAdvantage)


@admin.register(models.HomePage)
class HomePageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Главная страница"""
    group_fieldsets = True


@admin.register(models.HomeSlide)
class HomeSlideAdmin(BaseModelAdmin, TranslationAdmin):
    """Слайды на главной"""
    fields = models.HomeSlide().collect_fields()
    group_fieldsets = True
    list_display = ('id', 'image_thumb', 'title', 'ordering', 'status', 'created')
    list_display_links = ('id', 'image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    save_as = True
    search_fields = ['=id'] + get_model_translation_fields(models.HomeSlide)
