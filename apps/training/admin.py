# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin, TranslationTabularInline

from base.admin import BaseArticleAdmin
from training import models
from snippets.admin import BaseModelAdmin
from snippets.modeltranslation import get_model_translation_fields


class CourseTeacherInline(TranslationTabularInline):
    """Преподаватели курса"""
    extra = 0
    fields = models.CourseTeacher().collect_fields()
    model = models.CourseTeacher


class CourseScheduleInline(TranslationTabularInline):
    """Расписание курса"""
    extra = 0
    fields = models.CourseSchedule().collect_fields()
    model = models.CourseSchedule


@admin.register(models.Course)
class CourseAdmin(BaseArticleAdmin):
    """Курсы"""
    date_hierarchy = 'date_start'
    fields = models.Course().collect_fields()
    inlines = (CourseTeacherInline, CourseScheduleInline)
    list_display = (
        'id', 'image_thumb', 'title', 'date_start', 'date_finish', 'ordering', 'status', 'created'
    )
    list_editable = ('status', 'ordering')
    list_filter = BaseArticleAdmin.list_filter + ('city',)
    ordering = ('-date_start', '-date_finish', 'ordering')
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.Course)

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.Teacher)
class TeacherAdmin(BaseModelAdmin, TranslationAdmin):
    """Преподаватели"""
    fields = models.Teacher().collect_fields()
    list_display = ('id', 'image_thumb', 'title', 'ordering', 'status', 'created')
    list_display_links = ('id', 'image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.Teacher)
