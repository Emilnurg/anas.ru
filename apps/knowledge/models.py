# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from base.models import BaseArticle, BaseArticleSection
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

    def __str__(self):
        return self.title


class Article(BaseArticle):
    """Статьи базы знаний"""
    categories = models.ManyToManyField(
        ArticleCategory, related_name='articles', verbose_name=_('Категории базы знаний'),
        blank=True
    )

    class Meta:
        verbose_name = _('Статья')
        verbose_name_plural = _('База знаний')

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('knowledge:knowledge_page', kwargs={
            'lang': lang,
            'slug': self.slug
        })


class ArticleSection(BaseArticleSection):
    """Секции статей базы знаний"""
    article = models.ForeignKey(Article, verbose_name=_('Статья'), related_name='sections')

    class Meta:
        verbose_name = _('Секция статьи')
        verbose_name_plural = _('Секции статьи')
