# -*- coding: utf-8 -*-
from django.conf.urls import url

from faq import views


urlpatterns = (
    url(r'^(?P<lang>\w{2})/faq/$', views.FaqIndexView.as_view(), name='faq_index'),
)
