# -*- coding: utf-8 -*-
from django.conf.urls import url

from catalog import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/catalog/$',
        views.CatalogIndexView.as_view(), name='catalog_index'
    ),
)
