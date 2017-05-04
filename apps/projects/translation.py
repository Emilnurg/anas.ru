# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from base.translation import BaseArticleTranslationOptions
from projects import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Project)
class ProjectTranslationOptions(BaseArticleTranslationOptions):
    fields = models.Project.translation_fields


@register(models.ProjectSection)
class ProjectSectionTranslationOptions(BaseTranslationOptions):
    fields = models.ProjectSection.translation_fields
