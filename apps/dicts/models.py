# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from solo.models import SingletonModel

from snippets.models import LastModMixin, BaseModel, BasicModel


class City(BaseModel):
    """Города"""
    title = models.CharField(_('Название'), max_length=255, db_index=True, unique=True)

    class Meta:
        verbose_name = _('Город')
        verbose_name_plural = _('Города')

    def __str__(self):
        return self.title


class SiteConfiguration(SingletonModel, LastModMixin, BasicModel):
    """Настройки сайта"""
    def __str__(self):
        return _('Настройки сайта')

    class Meta:
        verbose_name = _('Настройки сайта')


class SocialNetwork(BaseModel):
    """Соц. сети"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True, unique=True)
    url = models.CharField(_('URL'), max_length=255)
    class_name = models.CharField(
        _('CSS-класс для ссылки (a тэг)'), blank=True, null=True, max_length=50
    )

    class Meta:
        verbose_name = _('Социальная сеть')
        verbose_name_plural = _('Социальные сети')

    def __str__(self):
        return self.title
