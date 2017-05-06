# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin, TranslationTabularInline
from solo.admin import SingletonModelAdmin

from pages import models


@admin.register(models.AboutPage)
class AboutPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "О компании" """
    pass


@admin.register(models.ContactsPage)
class ContactsPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Контакты" """
    pass


class HomeAdvantageInline(TranslationTabularInline):
    """Преимущества на главной странице"""
    extra = 0
    fields = models.HomeAdvantage().collect_fields()
    model = models.HomeAdvantage


class HomeSlideInline(TranslationTabularInline):
    """Слайды на главной"""
    extra = 0
    fields = models.HomeSlide().collect_fields()
    model = models.HomeSlide


@admin.register(models.HomePage)
class HomePageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Главная страница"""
    inlines = (HomeAdvantageInline, HomeSlideInline)
