# -*- coding: utf-8 -*-
from django.contrib import admin

from uploadifive import models


class UploadAdminMixin(object):
    """
    Миксин административного класса,
    добавляет в карточку объекта прикрепленные файлы
    """
    suit_form_includes = (
        ('uploadifive/upload/files_inline.html', 'bottom'),
    )


@admin.register(models.Upload)
class UploadAdmin(admin.ModelAdmin):
    """Загруженные файлы"""
    date_hierarchy = 'created'
    fields = models.Upload().collect_fields()
    list_display = ('id', 'filetype', 'filename', 'obtained', 'created')
    list_filter = ('obtained', 'filetype')
    readonly_fields = ('created', 'updated')
    search_fields = ('data', 'filetype', 'filename')
