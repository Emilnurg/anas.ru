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


@admin.register(models.AboutPage)
class AboutPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "О компании" """
    group_fieldsets = True
    inlines = (AboutAdvantageInline,)


@admin.register(models.ContactsPage)
class ContactsPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Контакты" """
    group_fieldsets = True


@admin.register(models.ServiceCenterPage)
class ServiceCenterPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Сервисный центр" """
    group_fieldsets = True
