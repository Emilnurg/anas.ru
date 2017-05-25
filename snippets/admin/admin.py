# -*- coding: utf-8 -*-
from django.contrib.admin import ModelAdmin


class SuperUserDeletableAdminMixin(object):
    @staticmethod
    def has_delete_permission(request, **kwargs):
        return request.user.is_superuser


class BaseModelAdmin(ModelAdmin):
    """Базовый класс для админ.части модели BaseModel"""
    list_display = ('id', 'status', 'ordering', 'created')
    list_editable = ('status', 'ordering')
    list_filter = ('status',)
    ordering = ('ordering',)
    readonly_fields = ('created', 'updated')


class ModelTranlsationFieldsetsMixin(object):
    def get_fieldsets(self, request, obj=None):
        fieldsets = super(ModelTranlsationFieldsetsMixin, self).get_fieldsets(request, obj=obj)
        fieldsets[0] = (None, {
            'fields': fieldsets[0][1]['fields'],
            'classes': ('suit-tab', 'suit-tab-general')
        })

        for i, fieldset in enumerate(fieldsets[1:], start=1):
            fieldsets[i] = (
                fieldset[0],
                dict(
                    fields=fieldset[1]['fields'],
                    classes=('suit-tab', 'suit-tab-%s' % '_'.join(
                        fieldset[1]['fields'][0].split('_')[:-1]
                    ))
                )
            )
        return fieldsets
