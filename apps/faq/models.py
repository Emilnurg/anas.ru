# -*- coding: utf-8 -*-
from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from django.utils.translation import ugettext_lazy as _

from snippets.models import BaseModel


class FaqSection(BaseModel):
    """Раздел FAQ"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True)

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Раздел FAQ')
        verbose_name_plural = _('Разделы FAQ')

    def __str__(self):
        return self.title


class FaqQuestion(BaseModel):
    """Вопрос FAQ"""
    title = models.CharField(_('Вопрос'), max_length=255)
    body = RichTextUploadingField(_('Ответ'), blank=True, null=False)

    sections = models.ManyToManyField(
        FaqSection, related_name='questions', verbose_name=_('Разделы FAQ'), blank=True
    )

    translation_fields = ('title', 'body')

    class Meta:
        verbose_name = _('Вопрос FAQ')
        verbose_name_plural = _('Вопросы FAQ')

    def __str__(self):
        return self.title
