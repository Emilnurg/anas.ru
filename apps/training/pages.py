# -*- coding: utf-8 -*-
from training import models


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    categories = models.TrainingCategory.objects.published()
    for category in categories:
        yield category.get_absolute_url(lang)

    courses = models.Course.objects.published()
    for course in courses:
        yield course.get_absolute_url(lang)
