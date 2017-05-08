# -*- coding: utf-8 -*-
from django.conf.urls import url

from search import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/search/$',
        views.SearchIndexView.as_view(), name='search_index'
    ),
    url(
        r'^(?P<lang>\w{2})/search/products/$',
        views.SearchSectionView.as_view(), name='search_index', kwargs={'section': 'products'}
    ),
    url(
        r'^(?P<lang>\w{2})/search/courses/$',
        views.SearchSectionView.as_view(), name='search_index', kwargs={'section': 'courses'}
    ),
    url(
        r'^(?P<lang>\w{2})/search/knowledge/$',
        views.SearchSectionView.as_view(), name='search_index', kwargs={'section': 'knowledge'}
    ),
)
