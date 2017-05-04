# -*- coding: utf-8 -*-
from django.contrib import admin

from snippets.admin import BaseModelAdmin, SuperUserDeletableAdminMixin
from snippets.general import models
from snippets.modeltranslation import get_model_translation_fields


@admin.register(models.DbConfig)
class DbConfigAdmin(SuperUserDeletableAdminMixin, BaseModelAdmin):
    """Переменные шаблонов"""
    fields = models.DbConfig().collect_fields()
    list_display = ('key', 'verbose_title', 'status', 'created')
    list_editable = ('status',)
    ordering = ('key',)
    search_fields = ['=id', 'key', 'verbose_title'] + get_model_translation_fields(models.DbConfig)


class MenuItemInline(admin.TabularInline):
    """Пункты меню"""
    extra = 0
    fields = models.MenuItem().collect_fields()
    model = models.MenuItem


@admin.register(models.Menu)
class MenuAdmin(SuperUserDeletableAdminMixin, BaseModelAdmin):
    """Меню"""
    fields = models.Menu().collect_fields()
    list_display = ('slug', 'comment', 'status', 'created')
    list_editable = ('status',)
    ordering = BaseModelAdmin.ordering + ('slug',)
    search_fields = ['=id', 'slug', 'comment'] + \
        ['items__%s' % x for x in get_model_translation_fields(models.MenuItem)]
