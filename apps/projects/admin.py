# -*- coding: utf-8 -*-
from django.contrib import admin

from image_cropping import ImageCroppingMixin
from modeltranslation.admin import TranslationStackedInline

from base.admin import BaseArticleAdmin
from projects import models
from snippets.admin.admin import ModelTranlsationFieldsetsMixin


class ProjectSectionInline(TranslationStackedInline):
    """Секции проекта"""
    extra = 0
    fields = models.ProjectSection().collect_fields()
    model = models.ProjectSection
    ordering = ('ordering',)
    suit_classes = 'suit-tab suit-tab-sections'


@admin.register(models.Project)
class ProjectAdmin(ImageCroppingMixin, ModelTranlsationFieldsetsMixin, BaseArticleAdmin):
    """Статьи базы знаний"""
    inlines = (ProjectSectionInline,)

    class Media:
        js = ('admin/js/translit.js',)
