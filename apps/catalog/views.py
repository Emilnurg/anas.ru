# -*- coding: utf-8 -*-
from django.core.paginator import InvalidPage, EmptyPage
from django.shortcuts import get_object_or_404
from django.urls import reverse
from pure_pagination import Paginator

from catalog import models, PRODUCTS_PER_PAGE
from snippets.models.enumerates import StatusEnum
from snippets.models.siblings import get_siblings
from snippets.views import BaseTemplateView


class ProductCategoryView(BaseTemplateView):
    """Страница категории продуктов"""
    template_name = 'catalog/category.html'

    def get_context_data(self, **kwargs):
        kwargs = super(ProductCategoryView, self).get_context_data(**kwargs)
        slug = kwargs.get('slug')

        current_category = None
        categories_base_qs = models.ProductCategory.objects.published()
        if slug:
            current_category = get_object_or_404(categories_base_qs, slug__exact=slug)

        parent_category = None
        if current_category and current_category.parent_id \
                and current_category.parent.status == StatusEnum.PUBLIC:
            parent_category = current_category.parent

        if current_category is None:
            children_categories = categories_base_qs.filter(level=0).order_by('ordering')
        elif current_category.is_leaf_node():
            children_categories = None
        else:
            children_categories = current_category.children.published().order_by('ordering')

        products_qs = models.Product.objects.published().order_by('ordering')
        if current_category is not None:
            products_qs = products_qs\
                .filter(categories__in=current_category.get_descendants(include_self=True))

        manufacturers = models.Manufacturer.objects.published()\
            .filter(products__in=products_qs.values_list('id'))\
            .order_by('ordering')\
            .distinct()

        current_manufacturer = None
        get_params = ''
        if kwargs['view'].request.GET.get('manufacturer'):
            current_manufacturer = get_object_or_404(
                models.Manufacturer,
                slug__exact=kwargs['view'].request.GET['manufacturer'],
                status=StatusEnum.PUBLIC
            )
            get_params = '?manufacturer=%s' % current_manufacturer.slug

            products_qs = products_qs.filter(manufacturer=current_manufacturer)

        # paginator
        paginator_page = None
        page = self.get_page()
        paginator = Paginator(products_qs, PRODUCTS_PER_PAGE, allow_empty_first_page=False)

        try:
            paginator_page = paginator.page(page)
            products_list = paginator_page.object_list
        except (EmptyPage, InvalidPage):
            products_list = []

        if current_category is None:
            kwargs['view'].request.active_url = reverse(
                'catalog:catalog_index', kwargs={'lang': kwargs.get('lang')}
            )
        elif current_category.is_root_node():
            kwargs['view'].request.active_url = current_category.get_absolute_url()
        else:
            kwargs['view'].request.active_url = current_category.get_root().get_absolute_url()

        kwargs.update(
            base_url=current_category.get_absolute_url(lang=kwargs.get('lang'))
            if current_category else reverse(
                'catalog:catalog_index', kwargs={'lang': kwargs.get('lang')}
            ),
            manufacturers=manufacturers,
            children_categories=children_categories,
            current_category=current_category,
            current_manufacturer=current_manufacturer,
            get_params=get_params,
            paginator_page=paginator_page,
            parent_category=parent_category,
            products_list=products_list
        )

        return kwargs


class ProductView(BaseTemplateView):
    """Страница продукта"""
    template_name = 'catalog/product.html'

    def get_context_data(self, **kwargs):
        kwargs = super(ProductView, self).get_context_data(**kwargs)
        current_product = get_object_or_404(
            models.Product.objects.published(), slug__exact=kwargs.get('slug')
        )

        docs = current_product.documents.published().order_by('ordering')

        features = current_product.features.published()\
            .filter(feature__status=StatusEnum.PUBLIC)\
            .select_related('feature').order_by('ordering', 'feature__ordering')

        features_main = current_product.features_main.published()\
            .filter(feature__status=StatusEnum.PUBLIC)\
            .select_related('feature').order_by('ordering', 'feature__ordering')

        images = current_product.images.published().order_by('ordering')

        main_category = current_product.categories.published()[:1]
        if main_category:
            main_category = main_category[0]

        siblings = None
        if main_category:
            siblings = get_siblings(
                main_category.products.published().order_by('ordering'),
                current_product.pk
            )

        if current_product.product_set_id:
            # получаем другие элементы набора
            set_components = current_product.product_set.set_components.published()\
                .exclude(pk=current_product.pk).order_by('ordering')
        else:
            # или если текущий товар - набор, то выводим его элементы
            set_components = current_product.set_components.published() or None

        kwargs.update(
            current_product=current_product,
            docs=docs,
            features=features,
            features_main=features_main,
            images=images,
            main_category=main_category,
            set_components=set_components,
            siblings=siblings
        )

        return kwargs


class ProductPrintView(ProductView):
    """Страница продукта (печать)"""
    template_name = 'catalog/product_print.html'
