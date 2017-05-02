# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from snippets.models import BaseModel
from snippets.models.image import ImageMixin


class Page(BaseModel):
    """Простые страницы"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас (лат.)'), max_length=150, db_index=True, unique=True)
    body = RichTextUploadingField(_('Контент'))

    def __str__(self):
        return self.title

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('core:flatpage', kwargs={'lang': lang, 'slug': self.slug})

    class Meta:
        verbose_name = _('Простая страница')
        verbose_name_plural = _('Простые страницы')


class Gallery(ImageMixin, BaseModel):
    """Галерея фотографий"""
    image = models.ImageField(_('Фотография'), upload_to='galleries/images')

    title = models.CharField(
        _('Рабочее название'), max_length=255, db_index=True,
        help_text=_('Для идентификации в административной части сайта')
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Галерея фотографий')
        verbose_name_plural = _('Галереи фотографий')


class GalleryPhoto(BaseModel):
    """Фотографии галерей"""
    gallery = models.ForeignKey(Gallery, verbose_name=_('Галерея'), related_name='photos')
    image = models.ImageField(_('Фотография'), upload_to='galleries/photos/%Y/%m/%d')
    alt = models.CharField(_('Текст вместо фото (alt)'), blank=True, null=False, max_length=255)
    body = RichTextUploadingField(_('Описание фото'), blank=True, null=False)

    def __str__(self):
        return self.alt if self.alt else str(self.pk)

    class Meta:
        verbose_name = _('Фотография галереи')
        verbose_name_plural = _('Фотографии галереи')
