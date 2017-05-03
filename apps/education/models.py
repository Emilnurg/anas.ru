# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from base.models import BaseArticle


class Course(BaseArticle):
    """Курсы (обучение)"""
    date_start = models.DateField(_('Дата начала'), blank=True, null=True)
    date_finish = models.DateField(_('Дата окончания'), blank=True, null=True)
    city = models.ForeignKey(
        'dicts.City', related_name='courses', verbose_name=_('Город'), blank=True, null=True
    )

    class Meta:
        verbose_name = _('Курс')
        verbose_name_plural = _('Курсы')
