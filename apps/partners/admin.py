# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin

from partners import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.Partner)
class PartnerAdmin(BaseModelAdmin, TranslationAdmin):
    """Дилеры"""
    group_fieldsets = True
    fields = models.Partner().collect_fields()
    filter_horizontal = ('professional_areas',)
    list_display = ('id', 'title', 'city', 'status', 'ordering', 'updated')
    list_display_links = ('id', 'title')
    list_filter = BaseModelAdmin.list_filter + ('city', 'professional_areas')
    ordering = ('ordering', 'title')
    search_fields = ['=id'] + get_model_translation_fields(models.Partner)
