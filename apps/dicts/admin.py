# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin
from solo.admin import SingletonModelAdmin

from dicts import models
from snippets.admin import SuperUserDeletableAdminMixin, BaseModelAdmin


@admin.register(models.City)
class CityAdmin(BaseModelAdmin, SuperUserDeletableAdminMixin, TranslationAdmin):
    """Города"""
    fields = models.City().collect_fields()
    list_display = ('id', 'title', 'status', 'ordering', 'created')
    list_display_links = ('id', 'title')
    search_fields = ('=id', 'title')


@admin.register(models.SiteConfiguration)
class SiteConfigurationAdmin(SingletonModelAdmin, TranslationAdmin):
    """Настройки сайта"""
    pass


@admin.register(models.SocialNetwork)
class SocialNetworkAdmin(BaseModelAdmin, SuperUserDeletableAdminMixin, TranslationAdmin):
    """Соц. сети"""
    fields = models.SocialNetwork().collect_fields()
    list_display = ('id', 'title', 'url', 'status', 'ordering', 'created')
    list_display_links = ('id', 'title')
    search_fields = ('=id', 'title', 'url', 'class_name')
