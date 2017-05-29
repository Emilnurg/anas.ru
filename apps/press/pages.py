# -*- coding: utf-8 -*-
from django.urls import reverse

from press import models


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    yield reverse('press:press_index', kwargs={'lang': lang})

    news_list = models.News.objects.published()
    for news in news_list:
        yield news.get_absolute_url(lang)
