# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class SearchIndexView(BaseTemplateView):
    """Главная страница поиска"""
    template_name = 'search/search_index.html'

    def get(self, request, lang=None, *args, **kwargs):
        # page = 1
        return super(SearchIndexView, self).get(request, *args, **kwargs)


class SearchSectionView(BaseTemplateView):
    """Страница поиска раздела"""
    template_name = 'search/search_partial.html'

    def get(self, request, lang=None, *args, **kwargs):
        page = self.get_page()
        return super(SearchSectionView, self).get(request, *args, **kwargs)
