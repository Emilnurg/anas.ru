# -*- coding: utf-8 -*-
from django.contrib import admin
from django.db.models import Prefetch
from django.utils.translation import ugettext_lazy as _

from modeltranslation.admin import TranslationAdmin

from support import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.SupportCategory)
class SupportCategoryAdmin(BaseModelAdmin, TranslationAdmin):
    """Категории тех. поддержки"""
    fields = models.SupportCategory().collect_fields()
    list_display = ('id', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug'] + get_model_translation_fields(models.SupportCategory)

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.SupportSection)
class SupportSectionAdmin(BaseModelAdmin, TranslationAdmin):
    """Категории продуктов"""
    filter_horizontal = ('categories',)
    group_fieldsets = True
    list_display = ('id', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    list_filter = BaseModelAdmin.list_filter + ('categories',)
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.SupportSection)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super(SupportSectionAdmin, self).get_fieldsets(request, obj=obj)
        fieldsets[0][1]['fields'].append('categories')
        return fieldsets


@admin.register(models.SupportQuestion)
class SupportQuestionAdmin(BaseModelAdmin, TranslationAdmin):
    """Категории продуктов"""
    fields = models.SupportQuestion().collect_fields() + ['sections']
    filter_horizontal = ('sections',)
    list_display = ('id', 'title', 'ordering', 'get_sections', 'status', 'updated')
    list_display_links = ('id', 'title')
    list_filter = BaseModelAdmin.list_filter + ('sections',)
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.SupportQuestion)

    def get_queryset(self, request):
        qs = super(SupportQuestionAdmin, self).get_queryset(request)
        qs = qs.prefetch_related(
            Prefetch(
                'sections', queryset=models.SupportSection.objects.published(),
                to_attr='sections_cache'
            )
        )
        return qs

    def get_sections(self, obj):
        return '<br/>'.join(x.title for x in obj.sections_cache)

    get_sections.allow_tags = True
    get_sections.short_description = _('Разделы')

    class Media:
        js = ('admin/js/translit.js',)
