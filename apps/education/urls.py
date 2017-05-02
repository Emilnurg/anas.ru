# -*- coding: utf-8 -*-
from django.conf.urls import url

from education import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/education/$',
        views.EducationIndexView.as_view(), name='education_index'
    ),
)
