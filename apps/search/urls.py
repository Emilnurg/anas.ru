# -*- coding: utf-8 -*-
from django.conf.urls import url

from search import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/search/$',
        views.SearchIndexView.as_view(), name='search'
    ),
    url(
        r'^(?P<lang>\w{2})/search/page/(?P<page>\d{1,5})/$',
        views.SearchIndexView.as_view(), name='search_with_page'
    )
)
