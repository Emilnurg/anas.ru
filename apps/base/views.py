# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class Error400View(BaseTemplateView):
    """Главная страница"""
    template_name = 'errors/400.html'


class Error403View(BaseTemplateView):
    """Главная страница"""
    template_name = 'errors/403.html'


class Error404View(BaseTemplateView):
    """Главная страница"""
    template_name = 'errors/404.html'


class Error500View(BaseTemplateView):
    """Главная страница"""
    template_name = 'errors/500.html'
