# -*- coding: utf-8 -*-
from django.core.paginator import EmptyPage, InvalidPage
from django.shortcuts import get_object_or_404
from django.urls import reverse

from pure_pagination import Paginator

from base import ARTICLES_PER_PAGE
from knowledge import models
from snippets.models.siblings import get_siblings
from snippets.views import BaseTemplateView


class KnowledgeIndexView(BaseTemplateView):
    """Главная страница базы знаний"""
    template_name = 'knowledge/knowledge_index.html'

    def get_context_data(self, **kwargs):
        kwargs = super(KnowledgeIndexView, self).get_context_data(**kwargs)
        articles_list = models.Article.objects\
            .published()\
            .actual()\
            .order_by('ordering', '-publish_date')

        categories = models.ArticleCategory.objects.published().order_by('ordering')

        current_category = None
        if kwargs.get('slug'):
            current_category = get_object_or_404(
                models.ArticleCategory.objects.published(),
                slug__exact=kwargs['slug']
            )
            articles_list = articles_list.filter(categories=current_category).distinct()

        # paginator
        paginator_page = None
        page = self.get_page()
        paginator = Paginator(articles_list, ARTICLES_PER_PAGE, allow_empty_first_page=False)

        try:
            paginator_page = paginator.page(page)
            articles_list = paginator_page.object_list
        except (EmptyPage, InvalidPage):
            articles_list = []

        list_url = reverse('knowledge:knowledge_index', kwargs={'lang': kwargs.get('lang')})
        kwargs['view'].request.active_url = list_url

        kwargs.update(
            base_url=kwargs['view'].request.active_url,
            categories=categories,
            current_category=current_category,
            get_params='',
            articles_list=articles_list,
            list_url=list_url,
            paginator=paginator,
            paginator_page=paginator_page,
            page=page
        )

        return kwargs


class KnowledgeView(BaseTemplateView):
    """Страница статьи базы знаний"""
    template_name = 'knowledge/knowledge.html'

    def get_context_data(self, **kwargs):
        kwargs = super(KnowledgeView, self).get_context_data(**kwargs)
        base_qs = models.Article.objects.published().actual()

        current_article = get_object_or_404(base_qs, slug__exact=kwargs.get('slug'))
        sections = current_article.sections.published().order_by('ordering')
        siblings = get_siblings(base_qs.order_by('ordering'), current_article.pk)
        list_url = reverse('knowledge:knowledge_index', kwargs={'lang': kwargs.get('lang')})

        kwargs.update(
            current_article=current_article,
            list_url=list_url,
            sections=sections,
            siblings=siblings
        )

        return kwargs
