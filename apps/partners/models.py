# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from dicts.models import City, ProfessionalArea
from snippets.models import BaseModel


class Partner(BaseModel):
    """Дилеры / партнеры"""
    title = models.CharField(_('Компания'), max_length=255)
    phone = models.CharField(_('Телефон'), blank=True, null=True, max_length=255)
    website = models.CharField(_('Сайт'), blank=True, null=True, max_length=255)
    address = models.TextField(_('Адрес'), blank=True, null=True)

    city = models.ForeignKey(
        City, related_name='partners', verbose_name=_('Город'), blank=True, null=True
    )
    professional_area = models.ForeignKey(
        ProfessionalArea, related_name='partners', verbose_name=_('Направление деятельности'),
        blank=True, null=True
    )

    map_y = models.FloatField(_('Координата Y (широта)'), blank=True, null=True)
    map_x = models.FloatField(_('Координата X (долгота)'), blank=True, null=True)

    translation_fields = ('title', 'phone', 'website', 'address')

    class Meta:
        verbose_name = _('Дилер')
        verbose_name_plural = _('Дилеры')

    def __str__(self):
        return 'ID=%s: %s' % (self.pk, self.title)
