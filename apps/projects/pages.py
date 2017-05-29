# -*- coding: utf-8 -*-
from django.urls import reverse

from projects import models


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    yield reverse('projects:projects_index', kwargs={'lang': lang})

    projects = models.Project.objects.published()
    for project in projects:
        yield project.get_absolute_url(lang)
