# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel

from snippets.models import BaseModel
from snippets.models.image import ImageMixin


class ProductCategory(ImageMixin, BaseModel, MPTTModel):
    """Категории"""
    title = models.CharField(_('Наименование'), max_length=255, db_index=True)
    parent = TreeForeignKey(
        'self', verbose_name=_('Родительская категория'),
        null=True, blank=True, related_name='children', db_index=True, on_delete=models.SET_NULL
    )

    class MPTTMeta:
        order_insertion_by = ['ordering']

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Продукт')
        verbose_name_plural = _('Продукты')


class Product(ImageMixin, BaseModel):
    """Товар"""
    title = models.CharField(_('Наименование'), max_length=255, db_index=True)

    categories = models.ManyToManyField(
        ProductCategory, _('Категории'), verbose_name=_('Категории'), related_name='products',
        blank=True
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Продукт')
        verbose_name_plural = _('Продукты')
