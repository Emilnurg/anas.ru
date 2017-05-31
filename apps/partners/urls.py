# -*- coding: utf-8 -*-
from django.conf.urls import url

from partners import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/partners/$',
        views.PartnersView.as_view(), name='partners_index'
    ),
)
