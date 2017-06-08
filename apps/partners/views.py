# -*- coding: utf-8 -*-
from django.db.models import Prefetch

from dicts.models import ProfessionalArea, City
from pages.models import PartnersPage
from partners import models
from snippets.views import BaseTemplateView


class PartnersView(BaseTemplateView):
    """Страница партнеров"""
    template_name = 'partners/partners_index.html'

    def get_context_data(self, **kwargs):
        kwargs = super(PartnersView, self).get_context_data(**kwargs)
        partners_page = PartnersPage.get_solo()

        partners_qs = models.Partner.objects.published()
        partners = partners_qs \
            .prefetch_related(
                Prefetch(
                    'professional_areas',
                    queryset=ProfessionalArea.objects.published(),
                    to_attr='professional_areas_cache'
                ),
            )\
            .select_related('city')\
            .order_by('ordering', 'city__ordering', 'title')

        cities = City.objects.published().order_by('ordering', 'title')\
            .filter(partners__in=partners_qs).distinct()

        professional_areas = ProfessionalArea.objects.published().order_by('ordering', 'title')\
            .filter(partners__in=partners_qs).distinct()

        kwargs.update(
            cities=cities,
            partners=partners,
            partners_page=partners_page,
            professional_areas=professional_areas
        )
        return kwargs
