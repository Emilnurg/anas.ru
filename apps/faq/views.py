# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class FaqIndexView(BaseTemplateView):
    """Главная страница FAQ"""
    template_name = 'faq/faq_index.html'
