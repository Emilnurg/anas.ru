# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from base.models import BaseArticle
from snippets.models import BaseModel


class Project(BaseArticle):
    """Реализованные проекты"""

    class Meta:
        verbose_name = _('Проект')
        verbose_name_plural = _('Реализованные проекты')


class ProjectSection(BaseModel):
    """Секции проектов"""
    project = models.ForeignKey(Project, verbose_name=_('Проект'), related_name='sections')
    title = models.CharField(_('Заголовок секции'), max_length=255, blank=True, null=True)
    body = RichTextUploadingField(
        _('Контент'), blank=True, null=False, help_text=_('Выводится выше всех секций')
    )
    gallery = models.ForeignKey(
        'core.Gallery', verbose_name=_('Галерея фотографий'), blank=True, null=True,
        related_name='project_sections'
    )

    translation_fields = ('title', 'body')

    def __str__(self):
        return str(self.pk) if self.pk else ''

    class Meta:
        verbose_name = _('Секция проекта')
        verbose_name_plural = _('Секции проекта')
