# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField

from base.enums import IconEnum
from core.enums import BlockBgEnum
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
        return reverse('pages:flatpage', kwargs={'lang': lang, 'slug': self.slug})


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


class HomeCatalog(BaseModel):
    """Каталог на главной"""
    title = models.CharField(_('Заголовок'), max_length=255)
    subtitle = models.CharField(_('Подзаголовок'), max_length=255, blank=True, null=True)
    link = models.CharField(_('Ссылка кнопки'), max_length=255, blank=True, null=True)
    button_caption = models.CharField(_('Текст кнопки'), max_length=255, blank=True, null=True)
    banner_title = models.CharField(_('Заголовок баннера'), max_length=255, blank=True, null=True)
    banner_subtitle = models.CharField(
        _('Подзаголовок баннера'), max_length=255, blank=True, null=True
    )
    bg = models.CharField(
        _('Фон'), max_length=100, choices=BlockBgEnum.get_choices(), blank=True, null=True
    )

    translation_fields = (
        'title', 'subtitle', 'link', 'button_caption',  'banner_title', 'banner_subtitle'
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Каталог на главной')
        verbose_name_plural = _('Каталоги на главной')


class HomeCatalogManufacturer(BaseModel):
    """Производители каталога на главной"""
    catalog = models.ForeignKey(
        HomeCatalog, related_name='manufacturers', verbose_name=_('Каталог')
    )
    manufacturer = models.ForeignKey(
        'catalog.Manufacturer', related_name='home_catalogs', verbose_name=_('Производитель')
    )

    def __str__(self):
        return '%s - %s' % (self.catalog.title, self.manufacturer.title)

    class Meta:
        verbose_name = _('Производитель каталога на главной')
        verbose_name_plural = _('Производители каталога главной')


class HomeCatalogProduct(BaseModel):
    """Продукты каталога на главной"""
    catalog = models.ForeignKey(HomeCatalog, related_name='products', verbose_name=_('Каталог'))
    product = models.ForeignKey(
        'catalog.Product', related_name='home_catalogs', verbose_name=_('Продукт')
    )

    def __str__(self):
        return '%s - %s' % (self.catalog.title, self.product.title)

    class Meta:
        verbose_name = _('Продукт каталога на главной')
        verbose_name_plural = _('Продукты каталога главной')


class HomeSlide(ImageMixin, BaseModel):
    """Преимущества на главной странице"""
    image = models.ImageField(
        _('Изображение'), max_length=255, upload_to='homepage_slides', blank=True, null=True
    )
    bg = models.ImageField(
        _('Фон'), max_length=255, upload_to='homepage_slides', blank=True, null=True
    )
    image_on_left = models.BooleanField(_('Изображение слева'), default=False)
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
