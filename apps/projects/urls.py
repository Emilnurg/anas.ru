# -*- coding: utf-8 -*-
from django.conf.urls import url

from projects import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/projects/$',
        views.ProjectsIndexView.as_view(), name='projects_index'
    ),
    url(
        r'^(?P<lang>\w{2})/projects/page/(?P<page>[0-9]{1,4})/$',
        views.ProjectsIndexView.as_view(), name='projects_index_with_page'
    ),
    url(
        r'^(?P<lang>\w{2})/projects/(?P<slug>[-\w]{1,150})/$',
        views.ProjectView.as_view(), name='project_page'
    )
)
