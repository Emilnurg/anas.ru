# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationStackedInline

from base.admin import BaseArticleAdmin
from projects import models


class ProjectSectionInline(TranslationStackedInline):
    """Секции проекта"""
    extra = 0
    fields = models.ProjectSection().collect_fields()
    model = models.ProjectSection
    ordering = ('ordering',)


@admin.register(models.Project)
class ArticleAdmin(BaseArticleAdmin):
    """Статьи базы знаний"""
    fields = models.Project().collect_fields()
    inlines = (ProjectSectionInline,)

    class Media:
        js = ('admin/js/translit.js',)
