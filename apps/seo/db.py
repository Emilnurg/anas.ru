# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from snippets.models import BaseEnumerate


class SEOMixin(models.Model):
    """Базовый класс для SEO-параметров модели"""
    seo_title = models.CharField(_('SEO Заголовок (title)'), max_length=254, blank=True, null=True)
    seo_description = models.TextField(_('META Description'), blank=True, null=True)
    seo_keywords = models.TextField(_('META Keywords'), blank=True, null=True)

    def collect_fieldsets(self, extra_general=None):
        fields = self.collect_fields()
        if extra_general:
            fields += extra_general
        return [
            (_('Основное'), {
                'classes': ('suit-tab suit-tab-general',),
                'fields': fields
            }),
            ('SEO', {
                'classes': ('suit-tab suit-tab-seo',),
                'fields': ['seo_title', 'seo_description', 'seo_keywords']
            }),
        ]

    def apply_seo_params(self, request):
        request.seo_params = {
            'seo_title': self.seo_title or getattr(self, 'title', None),
            'seo_description': self.seo_description,
            'seo_keywords': self.seo_keywords,
        }
        return request

    class Meta:
        abstract = True


class RedirectCodes(BaseEnumerate):
    """Location redirect codes"""
    C301 = 301
    C302 = 302
    C303 = 303
    C304 = 304
    C305 = 305
    C306 = 306
    C307 = 307
    C410 = 410

    values = {
        C301: '301',
        C302: '302',
        C303: '303',
        C304: '304',
        C305: '305',
        C306: '306',
        C307: '307',
        C410: '410',
    }
