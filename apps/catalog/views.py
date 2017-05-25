# -*- coding: utf-8 -*-
from snippets.views import BaseTemplateView


class ProductCategoryView(BaseTemplateView):
    """Страница категории продуктов"""
    template_name = 'catalog/category.html'


class ProductView(BaseTemplateView):
    """Страница продукта"""
    template_name = 'catalog/product.html'
