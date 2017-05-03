# -*- coding: utf-8 -*-
import datetime

from django.contrib.admin import FieldListFilter
from django.contrib.admin import ModelAdmin
from django.utils.translation import ugettext_lazy as _


class IsNullFieldListFilter(FieldListFilter):
    def __init__(self, field, request, params, model, model_admin, field_path):
        self.lookup_kwarg = '%s__isnull' % field_path
        self.lookup_val = request.GET.get(self.lookup_kwarg, None)

        super(IsNullFieldListFilter, self).__init__(
            field, request, params, model, model_admin, field_path
        )

    def expected_parameters(self):
        return [self.lookup_kwarg]

    def choices(self, cl):
        for lookup, title in (
                (None, _('All')),
                ('False', _('Yes')),
                ('True', _('No'))):

            yield {
                'selected': self.lookup_val == lookup,
                'query_string': cl.get_query_string({
                    self.lookup_kwarg: lookup,
                }),
                'display': title,
            }


def deactivate_action(modeladmin, request, queryset):
    queryset.update(is_active=False)


deactivate_action.short_description = 'Деактивировать'


def activate_action(modeladmin, request, queryset):
    queryset.update(is_active=True)


activate_action.short_description = 'Активировать'


def deactivate_and_set_date_to(modeladmin, request, queryset):
    queryset.update(is_active=False, date_to=datetime.date.today())


deactivate_and_set_date_to.short_description = 'Деактивировать'


def fast_delete_action(modeladmin, request, queryset):
    queryset.delete()


fast_delete_action.short_description = 'Удалить без подтверждения (если много объектов)'


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
