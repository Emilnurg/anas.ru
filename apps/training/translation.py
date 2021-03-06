# -*- coding: utf-8 -*-
from django.conf import settings

from modeltranslation.decorators import register

from base.translation import BaseArticleTranslationOptions
from training import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Course)
class CourseTranslationOptions(BaseArticleTranslationOptions):
    fields = models.Course.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.CourseAboutBlock)
class CourseAboutBlockTranslationOptions(BaseArticleTranslationOptions):
    fields = models.CourseAboutBlock.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('title',), 'default': ()}


@register(models.CourseSchedule)
class CourseScheduleTranslationOptions(BaseTranslationOptions):
    fields = models.CourseSchedule.translation_fields
    required_languages = {settings.DEFAULT_LANGUAGE: ('period',), 'default': ()}


@register(models.CourseTeacher)
class CourseTeacherTranslationOptions(BaseTranslationOptions):
    fields = models.CourseTeacher.translation_fields


@register(models.Teacher)
class TeacherTranslationOptions(BaseTranslationOptions):
    fields = models.Teacher.translation_fields


@register(models.TrainingCategory)
class TrainingCategoryTranslationOptions(BaseTranslationOptions):
    fields = models.TrainingCategory.translation_fields
