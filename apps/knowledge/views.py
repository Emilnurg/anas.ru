# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class KnowledgeIndexView(BaseTemplateView):
    """Главная страница базы знаний"""
    template_name = 'knowledge/knowledge_index.html'
