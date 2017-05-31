# -*- coding: utf-8 -*-
from django.db.models import Count
from django.http import Http404, HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.urls import reverse

from snippets.models.enumerates import StatusEnum
from snippets.views import BaseTemplateView
from support import models


class SupportIndexView(BaseTemplateView):
    """Главная страница тех. поддержки"""

    @staticmethod
    def get(request, *args, **kwargs):
        category = models.SupportCategory.objects.published().first()
        if not category:
            raise Http404

        return HttpResponseRedirect(category.get_absolute_url(request.LANGUAGE_CODE))


class SupportCategoryView(BaseTemplateView):
    """Страница категории тех. поддержки"""
    template_name = 'support/support_category.html'

    def get_context_data(self, **kwargs):
        kwargs = super(SupportCategoryView, self).get_context_data(**kwargs)

        current_category = get_object_or_404(
            models.SupportCategory.objects.published(), slug__exact=kwargs.get('slug')
        )

        sections = current_category.sections.published()\
            .filter(questions__status=StatusEnum.PUBLIC)\
            .annotate(questions_count=Count('questions'))\
            .filter(questions_count__gt=0)\
            .order_by('ordering')\
            .distinct()

        questions = models.SupportQuestion.objects\
            .published()\
            .filter(sections__in=sections)\
            .prefetch_related('sections')\
            .order_by('ordering') \
            .distinct()

        kwargs['view'].request.active_url = reverse(
            'support:support_index', kwargs={'lang': kwargs.get('lang')}
        )

        kwargs.update(
            current_category=current_category,
            questions=questions,
            sections=sections
        )
        return kwargs
