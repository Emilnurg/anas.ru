# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin
from solo.admin import SingletonModelAdmin

from dicts import models
from snippets.admin import SuperUserDeletableAdminMixin


@admin.register(models.SiteConfiguration)
class SiteConfigurationAdmin(SingletonModelAdmin, TranslationAdmin):
    """Настройки сайта"""
    pass


@admin.register(models.SocialNetwork)
class SocialNetworkAdmin(SuperUserDeletableAdminMixin, TranslationAdmin):
    """Соц. сети для вывода в контактах"""
    list_display = ('title', 'url', 'status', 'ordering', 'created')
    search_fields = ('=id', 'title', 'url', 'class_name')
    list_editable = ('status', 'ordering')
    list_filter = ('status',)
    ordering = ('ordering',)
    readonly_fields = ('created',)
