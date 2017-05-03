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
    list_display = ('id', 'filetype', 'filename', 'obtained', 'created')
    list_filter = ('obtained',)
    date_hierarchy = 'created'
    search_fields = ('data', 'filetype', 'filename')
