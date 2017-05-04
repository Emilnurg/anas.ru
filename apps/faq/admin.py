# -*- coding: utf-8 -*-
from django.contrib import admin
from django.db.models import Prefetch
from django.utils.translation import ugettext_lazy as _

from modeltranslation.admin import TranslationAdmin

from faq import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.FaqSection)
class FaqSectionAdmin(BaseModelAdmin, TranslationAdmin):
    """Категории продуктов"""
    fields = models.FaqSection().collect_fields()
    list_display = ('id', 'title', 'ordering', 'status', 'created')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.FaqSection)


@admin.register(models.FaqQuestion)
class FaqQuestionAdmin(BaseModelAdmin, TranslationAdmin):
    """Категории продуктов"""
    fields = models.FaqQuestion().collect_fields() + ['sections']
    list_display = ('id', 'title', 'ordering', 'get_sections', 'status', 'created')
    list_display_links = ('id', 'title')
    list_filter = BaseModelAdmin.list_filter + ('sections',)
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.FaqQuestion)

    def get_queryset(self, request):
        qs = super(FaqQuestionAdmin, self).get_queryset(request)
        qs = qs.prefetch_related(
            Prefetch(
                'sections', queryset=models.FaqSection.objects.published(),
                to_attr='sections_cache'
            )
        )
        return qs

    @staticmethod
    def get_sections(obj):
        return '<br/>'.join(x.title for x in obj.sections_cache)

    get_sections.allow_tags = True
    get_sections.short_description = _('Разделы')

    class Media:
        js = ('admin/js/translit.js',)
