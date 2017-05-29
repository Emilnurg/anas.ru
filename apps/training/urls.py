# -*- coding: utf-8 -*-
from django.conf.urls import url

from training import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/training/$',
        views.TrainingIndexView.as_view(), name='training_index'
    ),
    url(
        r'^(?P<lang>\w{2})/press/(?P<slug>[-\w]{1,150})/$',
        views.CourseView.as_view(), name='course_page'
    )
)
