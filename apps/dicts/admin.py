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


@admin.register(models.ProfessionalArea)
class ProfessionalAreaAdmin(BaseModelAdmin, SuperUserDeletableAdminMixin, TranslationAdmin):
    """Направления деятельности"""
    fields = models.ProfessionalArea().collect_fields()
    list_display = ('id', 'title', 'status', 'ordering', 'updated')
    list_display_links = ('id', 'title')
    ordering = ('ordering', 'title')
    search_fields = ['=id'] + get_model_translation_fields(models.ProfessionalArea)
