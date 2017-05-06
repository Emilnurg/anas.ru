# -*- coding: utf-8 -*-
from django.conf import settings

from core.models import Page
from snippets.seo.models import Robot
from snippets.views import BaseTemplateView


class SitemapView(BaseTemplateView):
    """sitemap.xml"""
    template_name = 'seo/sitemap.xml'
    content_type = 'application/xml'

    def get_context_data(self, **kwargs):
        context = super(SitemapView, self).get_context_data(**kwargs)
        pages = Page.objects.published().only('id', 'slug').order_by('ordering')

        context.update({
            'querysets': (pages,),
            'site_url': settings.SITE_URL
        })
        return context


class RobotsView(BaseTemplateView):
    """robots.txt"""
    template_name = 'seo/robots.txt'
    content_type = 'text/plain'

    def get_context_data(self, **kwargs):
        context = super(RobotsView, self).get_context_data(**kwargs)
        user_agents = Robot.objects.published().order_by('ordering')

        context.update({
            'user_agents': user_agents,
            'site_url': settings.SITE_URL
        })
        return context
