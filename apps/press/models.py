# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from base.models import BaseArticle
from snippets.models import BaseModel
from snippets.models.image import ImageMixin


class News(BaseArticle):
    """Новости"""
    related_news = models.ManyToManyField(
        'self', verbose_name=_('Связанные новости'), symmetrical=True, blank=True
    )

    class Meta:
        verbose_name = _('Новость')
        verbose_name_plural = _('Новости')


class NewsSection(BaseModel):
    """Секции новостей"""
    news = models.ForeignKey(News, verbose_name=_('Новость'), related_name='sections')
    title = models.CharField(_('Заголовок секции'), max_length=255, blank=True, null=True)
    body = RichTextUploadingField(
        _('Контент'), blank=True, null=False, help_text=_('Выводится выше всех секций')
    )
    gallery = models.ForeignKey(
        'core.Gallery', verbose_name=_('Галерея фотографий'), blank=True, null=True,
        related_name='news_sections'
    )

    def __str__(self):
        return str(self.pk) if self.pk else ''

    class Meta:
        verbose_name = _('Секция новости')
        verbose_name_plural = _('Секции новости')
