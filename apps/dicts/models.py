# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from snippets.models import BaseModel


class City(BaseModel):
    """Города"""
    title = models.CharField(_('Название'), max_length=255, db_index=True, unique=True)

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Город')
        verbose_name_plural = _('Города')

    def __str__(self):
        return self.title


class ProfessionalArea(BaseModel):
    """Направление деятельности"""
    title = models.CharField(_('Название'), max_length=255, db_index=True, unique=True)

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Направление деятельности')
        verbose_name_plural = _('Направления деятельности')

    def __str__(self):
        return self.title
