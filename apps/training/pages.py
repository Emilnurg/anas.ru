# -*- coding: utf-8 -*-
from django.urls import reverse

from training import models


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    yield reverse('training:training_index', kwargs={'lang': lang})

    courses = models.Course.objects.published()
    for course in courses:
        yield course.get_absolute_url(lang)
