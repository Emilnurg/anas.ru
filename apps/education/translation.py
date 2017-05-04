# -*- coding: utf-8 -*-
from modeltranslation.decorators import register

from base.trnaslation import BaseArticleTranslationOptions
from education import models
from snippets.modeltranslation import BaseTranslationOptions


@register(models.Course)
class CourseTranslationOptions(BaseArticleTranslationOptions):
    fields = BaseArticleTranslationOptions.fields + ('body_about', 'body_detail', 'body_schedule')


@register(models.Teacher)
class TeacherTranslationOptions(BaseTranslationOptions):
    fields = ('title',)


@register(models.CourseTeacher)
class CourseTeacherTranslationOptions(BaseTranslationOptions):
    fields = ('teacher_role',)


@register(models.CourseSchedule)
class CourseScheduleTranslationOptions(BaseTranslationOptions):
    fields = ('title',)
