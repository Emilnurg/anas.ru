# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from base.models import BaseArticle
from snippets.models import BaseModel


class ArticleCategory(BaseModel):
    """Категории статей базы знаний"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_(
            'Разрешены только латинские символы, цифры, символ подчеркивания и дефис (минус)'
        )
    )

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Категория базы знаний')
        verbose_name_plural = _('Категории базы знаний')


class Article(BaseArticle):
    """Статьи базы знаний"""
    categories = models.ManyToManyField(
        ArticleCategory, related_name='articles', verbose_name=_('Категории базы знаний'),
        blank=True
    )

    class Meta:
        verbose_name = _('Статья')
        verbose_name_plural = _('База знаний')


class ArticleSection(BaseModel):
    """Секции статей базы знаний"""
    article = models.ForeignKey(Article, verbose_name=_('Статья'), related_name='sections')
    title = models.CharField(_('Заголовок секции'), max_length=255, blank=True, null=True)
    body = RichTextUploadingField(
        _('Контент'), blank=True, null=False, help_text=_('Выводится выше всех секций')
    )
    gallery = models.ForeignKey(
        'core.Gallery', verbose_name=_('Галерея фотографий'), blank=True, null=True,
        related_name='article_sections'
    )

    translation_fields = ('title', 'body')

    def __str__(self):
        return str(self.pk) if self.pk else ''

    class Meta:
        verbose_name = _('Секция статьи')
        verbose_name_plural = _('Секции статьи')
