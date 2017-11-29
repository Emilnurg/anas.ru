# -*- coding: utf-8 -*-
from django.urls import reverse

from catalog import models


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    yield reverse('catalog:catalog_index', kwargs={'lang': lang})

    categories = models.ProductCategory.objects.published()
    for category in categories:
        yield category.get_absolute_url(lang)

    products = models.Product.objects.published()
    for product in products:
        yield product.get_absolute_url(lang)
