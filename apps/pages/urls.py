# -*- coding: utf-8 -*-
from django.conf.urls import url

from pages import views


urlpatterns = (
    url(
        r'^$',
        views.HomeView.as_view(), name='homepage_no_lang'
    ),
    url(
        r'^(?P<lang>\w{2})/$',
        views.HomeView.as_view(), name='homepage'
    ),
    url(
        r'^(?P<lang>\w{2})/about/$',
        views.AboutView.as_view(), name='about'
    ),
    url(
        r'^(?P<lang>\w{2})/contacts/$',
        views.ContactsView.as_view(), name='contacts'
    ),
    url(
        r'^(?P<lang>\w{2})/(?P<slug>[-\w]{1,150})/$',
        views.FlatpageView.as_view(), name='flatpage'
    )
)
