# -*- coding: utf-8 -*-
from django.views import View
from django.views.generic import TemplateView


class BaseTemplateView(TemplateView):
    template_name = None
    template_engine = 'jinja2'
    content_type = 'text/html'

    def get_page(self):
        """Получает номер страницы пагинации"""
        page = self.kwargs.get('page')
        try:
            page = int(page)
        except ValueError:
            page = 1

        if page < 1:
            page = 1

        return page


class BaseView(View):
    pass
