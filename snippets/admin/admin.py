# -*- coding: utf-8 -*-
from django.contrib.admin import ModelAdmin


class SuperUserDeletableAdminMixin(object):
    @staticmethod
    def has_delete_permission(request, obj=None):
        return request.user.is_superuser


class BaseModelAdmin(ModelAdmin):
    """Базовый класс для админ.части модели BaseModel"""
    list_display = ('id', 'status', 'ordering', 'created')
    list_editable = ('status', 'ordering')
    list_filter = ('status',)
    ordering = ('ordering',)
    readonly_fields = ('created', 'updated')
