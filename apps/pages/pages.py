# -*- coding: utf-8 -*-
from django.urls import reverse

from core import models


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    yield reverse('pages:homepage', kwargs={'lang': lang})
    yield reverse('pages:contacts', kwargs={'lang': lang})

    pages = models.Page.objects.published()
    for page in pages:
        yield page.get_absolute_url(lang)
