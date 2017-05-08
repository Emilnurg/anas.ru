# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class TrainingIndexView(BaseTemplateView):
    """Главная страница обучения"""
    template_name = 'training/training_index.html'
