# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class ProjectsIndexView(BaseTemplateView):
    """Главная страница реализованных проектов"""
    template_name = 'projects/projects_index.html'
