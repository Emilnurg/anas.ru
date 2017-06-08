# -*- coding: utf-8 -*-
from pages.models import PartnersPage
from snippets.views import BaseTemplateView


class PartnersView(BaseTemplateView):
    """Страница партнеров"""
    template_name = 'partners/partners_index.html'

    def get_context_data(self, **kwargs):
        kwargs = super(PartnersView, self).get_context_data(**kwargs)
        partners_page = PartnersPage.get_solo()
        kwargs.update(partners_page=partners_page)
        return kwargs
