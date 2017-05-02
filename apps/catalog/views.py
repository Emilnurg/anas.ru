# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class CatalogIndexView(BaseTemplateView):
    """Главная страница каталог"""
    template_name = 'catalog/catalog_index.html'


class ProductView(BaseTemplateView):
    """Страница товара"""
    template_name = 'catalog/product.html'
