# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin
from solo.admin import SingletonModelAdmin

from pages import models


@admin.register(models.AboutPage)
class AboutPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "О компании" """
    group_fieldsets = True


@admin.register(models.ContactsPage)
class ContactsPageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Страница "Контакты" """
    group_fieldsets = True


@admin.register(models.HomePage)
class HomePageAdmin(SingletonModelAdmin, TranslationAdmin):
    """Главная страница"""
    group_fieldsets = True
