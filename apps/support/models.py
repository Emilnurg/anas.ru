# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from snippets.models import BaseModel


class SupportCategory(BaseModel):
    """Категории тех. поддержки"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_(
            'Разрешены только латинские символы, цифры, символ подчеркивания и дефис (минус)'
        )
    )

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Категория тех. поддержки')
        verbose_name_plural = _('Категории тех. поддержки')

    def __str__(self):
        return self.title

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('support:support_category', kwargs={
            'lang': lang,
            'slug': self.slug
        })


class SupportSection(BaseModel):
    """Раздел тех. поддержки"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True)

    categories = models.ManyToManyField(
        SupportCategory, blank=True, verbose_name=_('Категории'), related_name='sections'
    )

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Раздел тех. поддержки')
        verbose_name_plural = _('Разделы тех. поддержки')

    def __str__(self):
        return self.title


class SupportQuestion(BaseModel):
    """Вопрос тех. поддержки"""
    title = models.CharField(_('Вопрос'), max_length=255, db_index=True)
    body = RichTextUploadingField(_('Ответ'), blank=True, null=False)

    sections = models.ManyToManyField(
        SupportSection, related_name='questions', verbose_name=_('Разделы тех. поддержки'),
        blank=True
    )

    translation_fields = ('title', 'body')

    class Meta:
        verbose_name = _('Вопрос тех. поддержки')
        verbose_name_plural = _('Вопросы тех. поддержки')

    def __str__(self):
        return self.title
