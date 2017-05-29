# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from base.models import BaseArticle, BaseArticleSection


class Project(BaseArticle):
    """Реализованные проекты"""
    bg = models.ImageField(_('Фон'), max_length=255, upload_to='projects', blank=True, null=True)
    body = RichTextUploadingField(
        _('Контент'), blank=True, null=False, help_text=_('Выводится выше всех секций')
    )
    excerpt = RichTextUploadingField(_('Анонс'), blank=True, null=True)

    translation_fields = BaseArticle.translation_fields + ('excerpt', 'body')

    class Meta:
        verbose_name = _('Проект')
        verbose_name_plural = _('Реализованные проекты')

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('projects:project_page', kwargs={
            'lang': lang,
            'slug': self.slug
        })


class ProjectSection(BaseArticleSection):
    """Секции проектов"""
    project = models.ForeignKey(Project, verbose_name=_('Проект'), related_name='sections')

    class Meta:
        verbose_name = _('Секция новости')
        verbose_name_plural = _('Секция новости')
