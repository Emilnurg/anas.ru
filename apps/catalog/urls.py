# -*- coding: utf-8 -*-
from django.conf.urls import url

from catalog import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/catalog/(?P<slug>[-\w]{1,150})/$',
        views.ProductCategoryView.as_view(), name='category'
    ),
    url(
        r'^(?P<lang>\w{2})/catalog/product/(?P<slug>[-\w]{1,150})/$',
        views.ProductView.as_view(), name='product'
    )
)
