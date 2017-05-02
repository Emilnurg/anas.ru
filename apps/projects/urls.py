# -*- coding: utf-8 -*-
from django.conf.urls import url

from projects import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/catalog/$',
        views.ProjectsIndexView.as_view(), name='projects_index'
    ),
)
