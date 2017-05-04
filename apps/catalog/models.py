# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField
from image_cropping import ImageCropField
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel

from base.enums import BackgroundPositionEnum
from snippets.datetime import utcnow
from snippets.models import BaseModel
from snippets.models.image import ImageMixin


class ProductCategory(ImageMixin, BaseModel, MPTTModel):
    """Категории"""
    title = models.CharField(_('Наименование'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_('Латинские буквы и цифры')
    )
    parent = TreeForeignKey(
        'self', verbose_name=_('Родительская категория'),
        null=True, blank=True, related_name='children', db_index=True, on_delete=models.SET_NULL
    )
    image = ImageCropField(
        _('Изображение'), max_length=255, upload_to='products', blank=True, null=True
    )
    background_position = models.CharField(
        _('Позиция фона'), choices=BackgroundPositionEnum.get_choices(),
        default=BackgroundPositionEnum.BOTTOM_CENTER, max_length=50
    )
    body = RichTextUploadingField(_('Контент'), blank=True, null=False)

    translation_fields = ('title', 'body')

    class MPTTMeta:
        order_insertion_by = ['ordering']

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Продукт')
        verbose_name_plural = _('Продукты')


class Product(ImageMixin, BaseModel):
    """Продукт"""
    title = models.CharField(_('Наименование'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_('Латинские буквы и цифры')
    )
    image = ImageCropField(
        _('Главное изображение'), max_length=255, upload_to='products', blank=True, null=True
    )
    body = RichTextUploadingField(_('Основной контент'), blank=True, null=False)
    features_body = RichTextUploadingField(
        _('Контент над характеристиками'), blank=True, null=False
    )

    categories = models.ManyToManyField(
        ProductCategory, verbose_name=_('Категории'), related_name='products',
        blank=True
    )

    translation_fields = ('title', 'body', 'features_body')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Продукт')
        verbose_name_plural = _('Продукты')


class Feature(BaseModel):
    """Характеристика"""
    title = models.CharField(_('Заголовок'), max_length=255, unique=True)

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Характеристика')
        verbose_name_plural = _('Характеристики')

    def __str__(self):
        return self.title


class ProductDocument(BaseModel):
    """Документы продукта"""
    product = models.ForeignKey(Product, verbose_name=_('Продукт'), related_name='documents')
    document = models.FileField(_('Документ'), max_length=255, upload_to='products/docs')
    title = models.CharField(_('Заголовок'), max_length=255, blank=True, null=True)
    publish_date = models.DateTimeField(_('Дата публикации'), db_index=True, default=utcnow)

    translation_fields = ('document', 'title')

    def __str__(self):
        return '%s: %s' % (self.product, self.title)

    class Meta:
        verbose_name = _('Документ продукта')
        verbose_name_plural = _('Документы продукта')


class ProductFeature(BaseModel):
    """Характеристика товара"""
    product = models.ForeignKey(Product, verbose_name=_('Товар'), related_name='features')
    feature = models.ForeignKey(
        Feature, related_name='product_features', verbose_name=_('Характеристика'),
    )
    value = models.CharField(_('Значение'), max_length=255)

    translation_fields = ('value',)

    class Meta:
        verbose_name = _('Характеристика товара')
        verbose_name_plural = _('Характеристики товара')

    def __str__(self):
        return '%s: %s' % (self.feature, self.value)


class ProductImage(ImageMixin, BaseModel):
    """Изображения продукта"""
    product = models.ForeignKey(Product, verbose_name=_('Продукт'), related_name='images')
    image = ImageCropField(_('Изображение'), max_length=255, upload_to='products/images')
    alt = models.CharField(
        _('Подпись (alt)'), max_length=255, blank=True, null=True,
        help_text=_('Альтернативный текст вместо изображения')
    )

    translation_fields = ('alt',)

    def __str__(self):
        return str(self.pk)

    class Meta:
        verbose_name = _('Изображение продукта')
        verbose_name_plural = _('Изображения продукта')
