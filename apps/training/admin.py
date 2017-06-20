# -*- coding: utf-8 -*-
from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from image_cropping import ImageCroppingMixin
from modeltranslation.admin import TranslationAdmin, TranslationStackedInline

from base.admin import BaseArticleAdmin
from snippets.admin import BaseModelAdmin
from snippets.admin.admin import ModelTranlsationFieldsetsMixin
from snippets.modeltranslation import get_model_translation_fields
from training import models


class CourseAboutBlockInline(TranslationStackedInline):
    """Блоки описания о курсе"""
    extra = 0
    fields = models.CourseAboutBlock().collect_fields()
    model = models.CourseAboutBlock
    ordering = ('ordering',)
    suit_classes = 'suit-tab suit-tab-about'


class CourseTeacherInline(TranslationStackedInline):
    """Преподаватели курса"""
    extra = 0
    fields = models.CourseTeacher().collect_fields()
    model = models.CourseTeacher
    ordering = ('ordering',)
    suit_classes = 'suit-tab suit-tab-teachers'


class CourseScheduleInline(TranslationStackedInline):
    """Расписание курса"""
    extra = 0
    fields = models.CourseSchedule().collect_fields()
    model = models.CourseSchedule
    ordering = ('ordering',)
    suit_classes = 'suit-tab suit-tab-schedule'


@admin.register(models.Course)
class CourseAdmin(ImageCroppingMixin, ModelTranlsationFieldsetsMixin, BaseArticleAdmin):
    """Курсы"""
    date_hierarchy = 'date_start'
    group_fieldsets = True
    filter_horizontal = ('categories',)
    inlines = (CourseAboutBlockInline, CourseTeacherInline, CourseScheduleInline)
    list_display = (
        'id', 'image_thumb', 'title', 'date_start', 'date_finish', 'ordering', 'status', 'updated'
    )
    list_editable = ('status', 'ordering')
    list_filter = BaseArticleAdmin.list_filter + ('city', 'categories')
    ordering = ('-date_start', '-date_finish', 'ordering')
    save_as = True
    search_fields = ['=id', 'slug', 'image'] + get_model_translation_fields(models.Course)
    suit_form_tabs = (
        ('general', _('Основное')),
        ('about', _('О курсе')),
        ('detail', _('Подробная информация')),
        ('teachers', _('Преподаватели курса')),
        ('schedule', _('Расписание'))
    )
    tabs_mapping = {
        '': 'general',
        'О курсе': 'about',
        'Подробная информация': 'detail',
        'Расписание': 'schedule'
    }

    class Media:
        js = ('admin/js/translit.js',)

    def get_fieldsets(self, request, obj=None):
        fieldsets = super(CourseAdmin, self).get_fieldsets(request, obj=obj)
        fieldsets[0][1]['fields'].append('categories')
        return fieldsets


@admin.register(models.Teacher)
class TeacherAdmin(ImageCroppingMixin, BaseModelAdmin, TranslationAdmin):
    """Преподаватели"""
    fields = models.Teacher().collect_fields()
    list_display = ('id', 'image_thumb', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'image_thumb', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id'] + get_model_translation_fields(models.Teacher)


@admin.register(models.TrainingCategory)
class TrainingCategoryAdmin(BaseModelAdmin, TranslationAdmin):
    """Категории курсов"""
    fields = models.TrainingCategory().collect_fields()
    list_display = ('id', 'title', 'ordering', 'status', 'updated')
    list_display_links = ('id', 'title')
    ordering = BaseModelAdmin.ordering + ('title',)
    search_fields = ['=id', 'slug'] + get_model_translation_fields(models.TrainingCategory)

    class Media:
        js = ('admin/js/translit.js',)
