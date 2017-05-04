# -*- coding: utf-8 -*-
from django.contrib import admin

from modeltranslation.admin import TranslationAdmin, TranslationTabularInline

from base.admin import BaseArticleAdmin
from education import models
from snippets.admin import BaseModelAdmin


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
        'image_thumb', 'title', 'date_start', 'date_finish', 'ordering', 'status', 'created'
    )
    list_editable = ('status', 'ordering')
    list_filter = BaseArticleAdmin.list_filter + ('city',)
    ordering = ('-date_start', '-date_end', 'ordering')
    search_fields = BaseArticleAdmin.search_fields + ('body_about', 'body_detail', 'body_schedule')

    class Media:
        js = ('admin/js/translit.js',)


@admin.register(models.Teacher)
class TeacherAdmin(BaseModelAdmin, TranslationAdmin):
    """Преподаватели"""
    fields = models.Teacher().collect_fields()
    list_display = ('image_thumb', 'title', 'ordering', 'status', 'created')
    list_display_links = ('image_thumb', 'title')
    search_fields = ('=id', 'title')
