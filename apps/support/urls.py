# -*- coding: utf-8 -*-
from django.conf.urls import url

from support import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/support/$',
        views.SupportIndexView.as_view(), name='support_index'
    ),
    url(
        r'^(?P<lang>\w{2})/support/(?P<slug>[-\w]{1,150})/$',
        views.SupportCategoryView.as_view(), name='support_category'
    ),
)
