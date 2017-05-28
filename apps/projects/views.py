# -*- coding: utf-8 -*-
from django.core.paginator import InvalidPage, EmptyPage
from django.shortcuts import get_object_or_404
from django.urls import reverse
from pure_pagination import Paginator

from base import ARTICLES_PER_PAGE
from projects import models
from snippets.models.siblings import get_siblings
from snippets.views import BaseTemplateView


class ProjectsIndexView(BaseTemplateView):
    """Главная страница реализованных проектов"""
    template_name = 'projects/projects_index.html'

    def get_context_data(self, **kwargs):
        kwargs = super(ProjectsIndexView, self).get_context_data(**kwargs)
        articles_list = models.Project.objects\
            .published()\
            .actual()\
            .order_by('ordering', '-publish_date')

        # paginator
        paginator_page = None
        page = self.get_page()
        paginator = Paginator(articles_list, ARTICLES_PER_PAGE, allow_empty_first_page=False)

        try:
            paginator_page = paginator.page(page)
            articles_list = paginator_page.object_list
        except (EmptyPage, InvalidPage):
            articles_list = []

        kwargs['view'].request.active_url = reverse(
            'projects:project_index', kwargs={'lang': kwargs['lang']}
        )

        kwargs.update({
            'base_url': kwargs['view'].request.active_url,
            'get_params': '',
            'articles_list': articles_list,
            'paginator': paginator,
            'paginator_page': paginator_page,
            'page': page
        })

        return kwargs


class ProjectView(BaseTemplateView):
    """Страница события или новости"""
    template_name = 'projects/project.html'

    def get_context_data(self, **kwargs):
        kwargs = super(ProjectView, self).get_context_data(**kwargs)
        base_qs = models.Project.objects.published().actual()

        current_news = get_object_or_404(base_qs, slug__exact=kwargs.get('slug'))
        sections = current_news.sections.published().order_by('ordering')
        siblings = get_siblings(base_qs.order_by('ordering'), current_news.pk)
        list_url = reverse('projects:project_index', kwargs={'lang': kwargs.get('lang')})

        kwargs.update({
            'current_article': current_news,
            'list_url': list_url,
            'sections': sections,
            'siblings': siblings
        })

        return kwargs
