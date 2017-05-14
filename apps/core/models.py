# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from base.enums import IconEnum
from snippets.models import BaseModel
from snippets.models.image import ImageMixin


class Page(BaseModel):
    """Простые страницы"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_('Латинские буквы и цифры')
    )
    body = RichTextUploadingField(_('Контент'), blank=True, null=False)

    translation_fields = ('title', 'body')

    class Meta:
        verbose_name = _('Простая страница')
        verbose_name_plural = _('Простые страницы')

    def __str__(self):
        return self.title

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('core:flatpage', kwargs={'lang': lang, 'slug': self.slug})


class Gallery(ImageMixin, BaseModel):
    """Галерея фотографий"""
    image = models.ImageField(_('Фотография'), upload_to='galleries/images')

    title = models.CharField(
        _('Рабочее название'), max_length=255, db_index=True,
        help_text=_('Для идентификации в административной части сайта')
    )

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Галерея фотографий')
        verbose_name_plural = _('Галереи фотографий')

    def __str__(self):
        return self.title


class GalleryPhoto(ImageMixin, BaseModel):
    """Фотографии галерей"""
    gallery = models.ForeignKey(Gallery, verbose_name=_('Галерея'), related_name='photos')
    image = models.ImageField(_('Фотография'), upload_to='galleries/photos/%Y/%m/%d')
    alt = models.CharField(_('Текст вместо фото (alt)'), blank=True, null=False, max_length=255)
    body = RichTextUploadingField(_('Описание фото'), blank=True, null=False)

    translation_fields = ('alt', 'body')

    class Meta:
        verbose_name = _('Фотография галереи')
        verbose_name_plural = _('Фотографии галереи')

    def __str__(self):
        return self.alt if self.alt else str(self.pk)


class HomeAdvantage(BaseModel):
    """Преимущества на главной странице"""
    icon = models.CharField(
        _('Иконка'), choices=IconEnum.get_choices(), blank=True, null=True, max_length=50
    )
    title = models.CharField(_('Заголовок'), max_length=255)

    translation_fields = ('title',)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Преимущество')
        verbose_name_plural = _('Преимущества на главной странице')


class HomeSlide(ImageMixin, BaseModel):
    """Преимущества на главной странице"""
    image = models.ImageField(
        _('Изображение'), max_length=255, upload_to='homepage_slides', blank=True, null=True
    )
    title = models.CharField(_('Заголовок'), max_length=255, blank=True, null=True)
    subtitle = models.CharField(_('Подзаголовок'), max_length=255, blank=True, null=True)
    url = models.CharField(_('Ссылка кнопки'), max_length=255, blank=True, null=True)
    button_caption = models.CharField(_('Текст кнопки'), max_length=255, blank=True, null=True)

    translation_fields = ('title', 'subtitle', 'url', 'button_caption')

    def __str__(self):
        return self.title if self.title else str(self.pk)

    class Meta:
        verbose_name = _('Слайд на главной')
        verbose_name_plural = _('Слайды на главной')
