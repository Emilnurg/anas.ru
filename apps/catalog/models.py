# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField
from image_cropping import ImageCropField, ImageRatioField
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel

from catalog.enums import ImagePositionEnum, CatalogBlockShapeEnum
from snippets.models import BaseModel, BaseManager
from snippets.models.image import ImageMixin
from snippets.utils.datetime import utcnow


class Manufacturer(ImageMixin, BaseModel):
    """Производитель"""
    title = models.CharField(_('Название'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_('Латинские буквы и цифры')
    )
    image = models.ImageField(
        _('Лого'), max_length=255, upload_to='manufacturers', blank=True, null=True
    )

    translation_fields = ('title',)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Производитель')
        verbose_name_plural = _('Производители')


class ProductCategory(ImageMixin, BaseModel, MPTTModel):
    """Категории продуктов"""
    title = models.CharField(_('Наименование'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_('Латинские буквы и цифры')
    )
    parent = TreeForeignKey(
        'self', verbose_name=_('Родительская категория'),
        null=True, blank=True, related_name='children', db_index=True, on_delete=models.SET_NULL
    )
    body = RichTextUploadingField(_('Контент'), blank=True, null=False)

    seo_block_title = models.CharField(
        _('Заголовок SEO-блока'), blank=True, null=True, max_length=255
    )
    seo_block_body = RichTextUploadingField(_('Контент SEO-блока'), blank=True, null=False)
    seo_block_image = models.ImageField(
        _('Изображение в SEO-блоке'), upload_to='categories/seo', blank=True, null=True
    )
    objects = BaseManager()

    translation_fields = ('title', 'body', 'seo_block_title', 'seo_block_body')

    class Meta:
        verbose_name = _('Категория продуктов')
        verbose_name_plural = _('Категории продуктов')

    class MPTTMeta:
        order_insertion_by = ['ordering']

    def __str__(self):
        return self.title

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE, page=None):
        kwargs = {
            'lang': lang,
            'slug': self.slug
        }

        if page is not None:
            kwargs['page'] = page

        return reverse(
            'catalog:category' if page is None else 'catalog:category_with_page', kwargs=kwargs
        )


ProductCategory._meta.get_field('level').verbose_name = _('Уровень')


class Product(ImageMixin, BaseModel):
    """Продукт"""
    title = models.CharField(_('Наименование'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_('Латинские буквы и цифры')
    )
    sku = models.CharField(
        _('Артикул'), max_length=255, blank=True, null=True, db_index=True, unique=True
    )
    block_shape = models.CharField(
        _('Форма блока'), choices=CatalogBlockShapeEnum.get_choices(),
        default=CatalogBlockShapeEnum.default, max_length=30
    )
    image = ImageCropField(
        _('Главное изображение'), max_length=255, upload_to='products', blank=True, null=True
    )
    image_position = models.CharField(
        _('Расположение изображения'), choices=ImagePositionEnum.get_choices(),
        default=ImagePositionEnum.default, max_length=30
    )
    body = RichTextUploadingField(_('Основной контент'), blank=True, null=False)
    short_description = models.TextField(
        _('Короткое описание'), blank=True, null=True, help_text=_('Применяется в наборах')
    )
    features_body = RichTextUploadingField(
        _('Контент вкладки "Характеристики"'), blank=True, null=False
    )
    training_body = RichTextUploadingField(
        _('Контент вкладки "Обучение"'), blank=True, null=False
    )
    testing_body = RichTextUploadingField(
        _('Контент вкладки "Тестирование"'), blank=True, null=False
    )
    docs_body = RichTextUploadingField(
        _('Контент вкладки "Документация"'), blank=True, null=False
    )

    manufacturer = models.ForeignKey(
        Manufacturer, related_name='products', verbose_name=_('Производитель'),
        blank=True, null=True
    )
    categories = models.ManyToManyField(
        ProductCategory, verbose_name=_('Категории'), related_name='products',
        blank=True
    )
    product_set = models.ForeignKey(
        'self', verbose_name=_('Входит в комплект'), related_name='set_components',
        blank=True, null=True
    )

    thumb_siblings = ImageRatioField(
        'image', size='170x170', verbose_name=_('Эскиз в навигации'), allow_fullsize=True,
        free_crop=True
    )

    translation_fields = (
        'title', 'body', 'short_description', 'features_body', 'training_body', 'testing_body',
        'docs_body'
    )

    class Meta:
        verbose_name = _('Продукт')
        verbose_name_plural = _('Продукты')

    def __str__(self):
        return self.title

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('catalog:product', kwargs={
            'lang': lang,
            'slug': self.slug
        })

    def get_image_size(self):
        if self.block_shape == CatalogBlockShapeEnum.HIGH:
            return '500x600'
        if self.image_position == ImagePositionEnum.RIGHT:
            return '200x300'
        return '500x210'


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

    class Meta:
        verbose_name = _('Документ продукта')
        verbose_name_plural = _('Документы продукта')

    def __str__(self):
        return '%s: %s' % (self.product, self.title)

    def get_extension(self):
        return self.document.url.split('.')[-1][:3]


class ProductFeature(BaseModel):
    """Характеристики товара"""
    product = models.ForeignKey(Product, verbose_name=_('Товар'), related_name='features')
    feature = models.ForeignKey(
        Feature, related_name='product_features', verbose_name=_('Характеристика'),
    )
    value = models.CharField(_('Значение'), max_length=255)
    hint = models.CharField(_('Подсказка'), max_length=255, blank=True, null=True)

    translation_fields = ('value', 'hint')

    class Meta:
        verbose_name = _('Характеристика товара')
        verbose_name_plural = _('Характеристики товара')

    def __str__(self):
        return '%s: %s' % (self.feature, self.value)


class ProductFeatureMain(BaseModel):
    """Главные характеристики товара"""
    product = models.ForeignKey(Product, verbose_name=_('Товар'), related_name='features_main')
    feature = models.ForeignKey(
        Feature, related_name='product_features_main', verbose_name=_('Характеристика'),
    )
    value = models.CharField(_('Значение'), max_length=255)
    hint = models.CharField(_('Подсказка'), max_length=255, blank=True, null=True)

    translation_fields = ('value', 'hint')

    class Meta:
        verbose_name = _('Главная характеристика товара')
        verbose_name_plural = _('Главные характеристики товара')

    def __str__(self):
        return '%s: %s' % (self.feature, self.value)


class ProductImage(ImageMixin, BaseModel):
    """Изображения продукта"""
    product = models.ForeignKey(Product, verbose_name=_('Продукт'), related_name='images')
    image = ImageCropField(_('Изображение'), max_length=255, upload_to='products/images')
    thumb_images = ImageRatioField(
        'image', size='800x600', verbose_name=_('Обрезка полей'), allow_fullsize=True,
        free_crop=True
    )

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
