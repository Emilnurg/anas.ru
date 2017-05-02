# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField
from image_cropping import ImageCropField, ImageRatioField

from snippets.datetime import utcnow
from snippets.models import BaseModel
from snippets.models.image import ImageMixin


class News(ImageMixin, BaseModel):
    """Новости"""
    title = models.CharField(_('Заголовок'), max_length=255)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_(
            'Разрешены только латинские символы, цифры, символ подчеркивания и дефис (минус)'
        )
    )
    publish_date = models.DateTimeField(_('Дата публикации'), db_index=True, default=utcnow)
    image = ImageCropField(
        _('Изображение'), upload_to='news', max_length=255,
        blank=True, null=True
    )
    thumb_list = ImageRatioField('image', '200x400', verbose_name=_('Эскиз в списке'))
    excerpt = RichTextUploadingField(_('Анонс'), blank=True, null=True)
    body = RichTextUploadingField(
        _('Контент'), blank=True, null=False, help_text=_('Выводится выше всех секций')
    )

    related_news = models.ManyToManyField(
        'self', verbose_name=_('Связанные новости'), symmetrical=True, blank=True
    )

    def __str__(self):
        return self.title

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
