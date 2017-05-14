# -*- coding: utf-8 -*-
from django.conf import settings
from django.http import HttpResponseRedirect

from core.models import HomeAdvantage, HomeSlide
from core.utils import get_flat_page
from pages.models import HomePage
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
        home_slides = HomeSlide.objects.published().order_by('ordering')
        home_advantages = HomeAdvantage.objects.published().order_by('ordering')

        kwargs.update(
            home_advantages=home_advantages,
            home_page=home_page,
            home_slides=home_slides
        )
        return kwargs


class AboutView(BaseTemplateView):
    """О компании"""
    template_name = 'pages/about.html'


class ContactsView(BaseTemplateView):
    """Контакты"""
    template_name = 'pages/contacts.html'


class FlatpageView(BaseTemplateView):
    """Простые страницы"""
    template_name = 'pages/flatpage.html'

    def get_context_data(self, **kwargs):
        context = super(FlatpageView, self).get_context_data(**kwargs)
        context.update({
            'current_page': get_flat_page(kwargs.get('slug'))
        })
        return context
