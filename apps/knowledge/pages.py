# -*- coding: utf-8 -*-
from django.urls import reverse

from knowledge import models


def get_page_urls(lang):
    """Получает все известные публичные ссылки для sitemap.xml в рамках текущего приложения"""
    yield reverse('knowledge:knowledge_index', kwargs={'lang': lang})

    knowledge_categories = models.ArticleCategory.objects.published()
    for category in knowledge_categories:
        yield category.get_absolute_url(lang)

    knowledge_articles = models.Article.objects.published()
    for knowledge_article in knowledge_articles:
        yield knowledge_article.get_absolute_url(lang)
