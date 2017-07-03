# -*- coding: utf-8 -*-
from django.conf.urls import url

from press import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/press/$',
        views.PressIndexView.as_view(), name='press_index'
    ),
    url(
        r'^(?P<lang>\w{2})/press/page/(?P<page>[0-9]{1,4})/$',
        views.PressIndexView.as_view(), name='press_index_with_page'
    ),
    url(
        r'^(?P<lang>\w{2})/press/(?P<slug>[-\w]{1,150})/$',
        views.PressView.as_view(), name='press_page'
    )
)
