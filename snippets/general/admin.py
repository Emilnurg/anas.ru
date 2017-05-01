# -*- coding: utf-8 -*-
from django.contrib import admin

from snippets.admin import BaseModelAdmin, SuperUserDeletableAdminMixin
from snippets.general import models


@admin.register(models.DbConfig)
class DbConfigAdmin(SuperUserDeletableAdminMixin, BaseModelAdmin):
    """Переменные шаблонов"""
    list_display = ('key', 'verbose_title', 'status', 'created')
    search_fields = ('=id', 'key', 'verbose_title', 'value')
    list_filter = list_editable = ('status',)
    ordering = ('key',)
    readonly_fields = ('created',)


class MenuItemInline(admin.TabularInline):
    """Пункты меню"""
    model = models.MenuItem
    extra = 0


@admin.register(models.Menu)
class MenuAdmin(SuperUserDeletableAdminMixin, BaseModelAdmin):
    """Меню"""
    list_display = ('slug', 'comment', 'status', 'created')
    search_fields = ('=id', 'slug', 'comment', 'items__title', 'items__url')
    list_filter = list_editable = ('status',)
    readonly_fields = ('created',)
    ordering = ('ordering',)
    inlines = (MenuItemInline,)
