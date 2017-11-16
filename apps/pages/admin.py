# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin, TranslationStackedInline
from solo.admin import SingletonModelAdmin

from pages import models


class AboutAdvantageInline(TranslationStackedInline):
    """Преимущества на странице "О компании" """
    extra = 0
    fields = models.AboutAdvantage().collect_fields()
    model = models.AboutAdvantage
    readonly_fields = ('created', 'updated')


@admin.register(models.AboutPage)
class AboutPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "О компании" """
    group_fieldsets = True
    inlines = (AboutAdvantageInline,)


@admin.register(models.ContactsPage)
class ContactsPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Контакты" """
    group_fieldsets = True


@admin.register(models.HomePage)
class HomePageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Главная страница"""
    group_fieldsets = True


@admin.register(models.PartnersPage)
class PartnersPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Партнеры" """
    group_fieldsets = True


class ServiceRequestOrderInline(TranslationStackedInline):
    """Порядок обращения"""
    extra = 0
    fields = models.ServiceRequestOrder().collect_fields()
    model = models.ServiceRequestOrder
    readonly_fields = ('created', 'updated')


@admin.register(models.ServiceCenterPage)
class ServiceCenterPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Сервисный центр" """
    group_fieldsets = True
    inlines = (ServiceRequestOrderInline,)
