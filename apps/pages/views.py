# -*- coding: utf-8 -*-
from django.conf import settings
from django.db.models import Prefetch
from django.http import HttpResponseRedirect

from core.models import HomeAdvantage, HomeSlide, HomeCatalog, HomeCatalogProduct, \
    HomeCatalogManufacturer
from core.utils import get_flat_page
from knowledge.models import ArticleCategory
from pages.models import HomePage, ContactsPage, AboutPage, AboutAdvantage
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
        home_advantages = HomeAdvantage.objects.published().order_by('ordering')[:5]

        home_catalogs = HomeCatalog.objects.published().order_by('ordering')\
            .prefetch_related((
                Prefetch(
                    'manufacturers',
                    queryset=HomeCatalogManufacturer.objects.published().order_by('ordering')
                    .select_related('manufacturer'),
                    to_attr='manufacturers_cache'
                ),
            )).prefetch_related((
                Prefetch(
                    'products',
                    queryset=HomeCatalogProduct.objects.published().order_by('ordering')
                    .select_related('product'),
                    to_attr='products_cache'
                ),
            ))

        kwargs.update(
            home_advantages=home_advantages,
            home_catalogs=home_catalogs,
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
