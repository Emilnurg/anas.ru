# -*- coding: utf-8 -*-
from django.conf import settings
from django.http import HttpResponseRedirect

from core.utils import get_flat_page
from snippets.views import BaseTemplateView


class HomeView(BaseTemplateView):
    """Главная страница"""
    template_name = 'core/homepage.html'

    def get(self, request, lang=None, *args, **kwargs):
        if lang is None:
            lang = getattr(request, 'LANGUAGE_CODE', None) \
                   or settings.DEFAULT_LANGUAGE
            return HttpResponseRedirect('/%s/' % lang)
        return super(HomeView, self).get(request, *args, **kwargs)


class FlatpageView(BaseTemplateView):
    """Простые страницы"""
    template_name = 'core/flatpage.html'

    @staticmethod
    def get_context_data(**kwargs):
        return {
            'current_page': get_flat_page(kwargs.get('slug'))
        }
