# -*- coding: utf-8 -*-
from django.contrib import admin

from image_cropping import ImageCroppingMixin

from base.admin import BaseArticleAdmin, BaseArticleSectionInline
from projects import models
from snippets.admin.admin import ModelTranlsationFieldsetsMixin


class ProjectSectionInline(BaseArticleSectionInline):
    """Секции проекта"""
    fields = models.ProjectSection().collect_fields()
    model = models.ProjectSection


@admin.register(models.Project)
class ProjectAdmin(ImageCroppingMixin, ModelTranlsationFieldsetsMixin, BaseArticleAdmin):
    """Статьи базы знаний"""
    inlines = (ProjectSectionInline,)

    class Media:
        js = ('admin/js/translit.js',)
