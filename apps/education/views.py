# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class EducationIndexView(BaseTemplateView):
    """Главная страница обучения"""
    template_name = 'education/education_index.html'
