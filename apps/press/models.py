# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from base.models import BaseArticle, BaseArticleSection


class News(BaseArticle):
    """Новости"""
    excerpt = RichTextUploadingField(_('Анонс'), blank=True, null=True)

    translation_fields = BaseArticle.translation_fields + ('excerpt',)

    class Meta:
        verbose_name = _('Новость')
        verbose_name_plural = _('Новости')

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('press:press_page', kwargs={
            'lang': lang,
            'slug': self.slug
        })


class NewsSection(BaseArticleSection):
    """Секции новостей"""
    news = models.ForeignKey(News, verbose_name=_('Новость'), related_name='sections')

    class Meta:
        verbose_name = _('Секция новости')
        verbose_name_plural = _('Секция новости')
