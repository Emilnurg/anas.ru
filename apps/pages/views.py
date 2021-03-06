# -*- coding: utf-8 -*-
from collections import defaultdict

from django.conf import settings
from django.http import HttpResponseRedirect

from core.models import HomeAdvantage, HomeSlide, HomeCatalog, HomeCatalogProduct, \
    HomeCatalogManufacturer
from core.utils import get_flat_page
from pages.models import ContactsPage, AboutPage, AboutAdvantage, ServiceCenterPage, \
    ServiceRequestOrder, HomePage
from snippets.models.enumerates import StatusEnum
from snippets.views import BaseTemplateView


class HomeView(BaseTemplateView):
    """Главная страница"""
    template_name = 'pages/homepage.html'

    def get(self, request, lang=None, *args, **kwargs):
        if lang is None:
            lang = getattr(request, 'LANGUAGE_CODE', None) \
                   or settings.DEFAULT_LANGUAGE
            return HttpResponseRedirect('/%s/' % lang)
        return super(HomeView, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        kwargs = super(HomeView, self).get_context_data(**kwargs)
        home_page = HomePage.get_solo()
        home_slides = HomeSlide.objects.published().order_by('ordering')[:20]
        home_advantages = None  # HomeAdvantage.objects.published().order_by('ordering')[:5]

        home_catalogs = HomeCatalog.objects.published().order_by('ordering')

        home_catalog_products = defaultdict(list)
        for product in HomeCatalogProduct.objects.published()\
                .filter(product__status=StatusEnum.PUBLIC, catalog__status=StatusEnum.PUBLIC)\
                .select_related('product').order_by('ordering').iterator():
            home_catalog_products[product.catalog_id].append(product.product)

        home_catalog_manufacturers = defaultdict(list)
        for manufacturer in HomeCatalogManufacturer.objects.published()\
                .filter(manufacturer__status=StatusEnum.PUBLIC, catalog__status=StatusEnum.PUBLIC)\
                .select_related('manufacturer').order_by('ordering').iterator():
            home_catalog_manufacturers[manufacturer.catalog_id].append(manufacturer.manufacturer)

        kwargs.update(
            home_advantages=home_advantages,
            home_catalogs=home_catalogs,
            home_catalog_manufacturers=home_catalog_manufacturers,
            home_catalog_products=home_catalog_products,
            home_page=home_page,
            home_slides=home_slides
        )
        return kwargs


class AboutView(BaseTemplateView):
    """О компании"""
    template_name = 'pages/about.html'

    def get_context_data(self, **kwargs):
        kwargs = super(AboutView, self).get_context_data(**kwargs)
        about_page = AboutPage.get_solo()
        advantages = AboutAdvantage.objects.published().order_by('ordering')[:3]

        kwargs.update(
            about_page=about_page,
            advantages=advantages
        )
        return kwargs


class ContactsView(BaseTemplateView):
    """Контакты"""
    template_name = 'pages/contacts.html'

    def get_context_data(self, **kwargs):
        kwargs = super(ContactsView, self).get_context_data(**kwargs)
        contacts_page = ContactsPage.get_solo()

        kwargs.update(contacts_page=contacts_page)
        return kwargs


class FlatpageView(BaseTemplateView):
    """Простые страницы"""
    template_name = 'pages/flatpage.html'

    def get_context_data(self, **kwargs):
        context = super(FlatpageView, self).get_context_data(**kwargs)
        context.update({
            'current_page': get_flat_page(kwargs.get('slug'))
        })
        return context


class ServiceCenterView(BaseTemplateView):
    """Сервис-центр"""
    template_name = 'pages/service_center.html'

    def get_context_data(self, **kwargs):
        kwargs = super(ServiceCenterView, self).get_context_data(**kwargs)
        service_page = ServiceCenterPage.get_solo()
        request_order = ServiceRequestOrder.objects.published()

        kwargs.update(
            service_page=service_page,
            request_order=request_order
        )
        return kwargs
