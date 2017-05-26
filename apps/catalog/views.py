# -*- coding: utf-8 -*-
from django.core.paginator import InvalidPage, EmptyPage
from django.shortcuts import get_object_or_404
from pure_pagination import Paginator

from catalog import models, PRODUCTS_PER_PAGE
from snippets.http.request import get_page
from snippets.models.enumerates import StatusEnum
from snippets.views import BaseTemplateView


class ProductCategoryView(BaseTemplateView):
    """Страница категории продуктов"""
    template_name = 'catalog/category.html'

    def get_context_data(self, **kwargs):
        kwargs = super(ProductCategoryView, self).get_context_data(**kwargs)
        current_category = get_object_or_404(
            models.ProductCategory.objects.published(), slug__exact=kwargs.get('slug')
        )

        parent_category = None
        if current_category.parent_id and current_category.parent.status == StatusEnum.PUBLIC:
            parent_category = current_category.parent

        if current_category.is_leaf_node():
            children_categories = None
        else:
            children_categories = current_category.children.published().order_by('ordering')
        products_qs = models.Product.objects.published()\
            .filter(categories__in=current_category.get_descendants(include_self=True)) \
            .order_by('ordering')

        manufacturers = models.Manufacturer.objects.published()\
            .filter(products__in=products_qs.values_list('id'))\
            .order_by('ordering')

        current_manufacturer = None
        get_params = ''
        if kwargs['view'].request.GET.get('manufacturer'):
            current_manufacturer = get_object_or_404(
                models.Manufacturer,
                slug__exact=kwargs['request'].GET['manufacturer'],
                status=StatusEnum.PUBLIC
            )
            get_params = '?manufacturer=%s' % current_manufacturer.slug

            products_qs = products_qs.filter(manufacturer=current_manufacturer)

        # paginator
        paginator_page = None
        page = get_page(kwargs.get('page', 1))
        paginator = Paginator(products_qs, PRODUCTS_PER_PAGE, allow_empty_first_page=False)

        try:
            paginator_page = paginator.page(page)
            products_list = paginator_page.object_list
        except (EmptyPage, InvalidPage):
            products_list = []

        kwargs.update({
            'base_url': current_category.get_absolute_url(lang=kwargs.get('lang')),
            'manufacturers': manufacturers,
            'children_categories': children_categories,
            'current_category': current_category,
            'current_manufacturer': current_manufacturer,
            'get_params': get_params,
            'page': page,
            'paginator': paginator,
            'paginator_page': paginator_page,
            'parent_category': parent_category,
            'products_list': products_list
        })

        return kwargs


class ProductView(BaseTemplateView):
    """Страница продукта"""
    template_name = 'catalog/product.html'
