# -*- coding: utf-8 -*-
from django.conf.urls import url

from catalog import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/catalog/$',
        views.ProductCategoryView.as_view(), name='catalog_index'
    ),
    url(
        r'^(?P<lang>\w{2})/catalog/page/(?P<page>\d{1,5})/$',
        views.ProductCategoryView.as_view(), name='catalog_index_with_page'
    ),
    url(
        r'^(?P<lang>\w{2})/catalog/(?P<slug>[-\w]{1,150})/$',
        views.ProductCategoryView.as_view(), name='category'
    ),
    url(
        r'^(?P<lang>\w{2})/catalog/(?P<slug>[-\w]{1,150})/page/(?P<page>\d{1,5})/$',
        views.ProductCategoryView.as_view(), name='category_with_page'
    ),
    url(
        r'^(?P<lang>\w{2})/catalog/product/(?P<slug>[-\w]{1,150})/$',
        views.ProductView.as_view(), name='product'
    ),
    url(
        r'^(?P<lang>\w{2})/catalog/product/(?P<slug>[-\w]{1,150})/print/$',
        views.ProductPrintView.as_view(), name='product_print'
    )
)
