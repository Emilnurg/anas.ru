# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class PressIndexView(BaseTemplateView):
    """Главная страница событий и новостей"""
    template_name = 'press/press_index.html'


class PressView(BaseTemplateView):
    """Страница события или новости"""
    template_name = 'press/press.html'
