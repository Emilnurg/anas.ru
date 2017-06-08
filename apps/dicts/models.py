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


class SocialNetwork(BaseModel):
    """Соц. сети"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True, unique=True)
    url = models.CharField(_('URL'), max_length=255)
    class_name = models.CharField(
        _('CSS-класс для ссылки (a тэг)'), blank=True, null=True, max_length=50
    )

    translation_fields = ('title', 'url')

    class Meta:
        verbose_name = _('Социальная сеть')
        verbose_name_plural = _('Социальные сети')

    def __str__(self):
        return self.title
