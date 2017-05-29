# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin

from dicts import models
from snippets.admin import SuperUserDeletableAdminMixin, BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.City)
class CityAdmin(BaseModelAdmin, SuperUserDeletableAdminMixin, TranslationAdmin):
    """Города"""
    fields = models.City().collect_fields()
    list_display = ('id', 'title', 'status', 'ordering', 'updated')
    list_display_links = ('id', 'title')
    ordering = ('ordering', 'title')
    search_fields = ['=id'] + get_model_translation_fields(models.City)


@admin.register(models.SocialNetwork)
class SocialNetworkAdmin(BaseModelAdmin, SuperUserDeletableAdminMixin, TranslationAdmin):
    """Соц. сети"""
    fields = models.SocialNetwork().collect_fields()
    list_display = ('id', 'title', 'url', 'status', 'ordering', 'updated')
    list_display_links = ('id', 'title')
    search_fields = ['=id', 'class_name'] + get_model_translation_fields(models.SocialNetwork)
