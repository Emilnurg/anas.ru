# -*- coding: utf-8 -*-
from django.urls import reverse


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    yield reverse('search:search', kwargs={'lang': lang})
