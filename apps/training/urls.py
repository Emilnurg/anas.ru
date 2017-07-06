# -*- coding: utf-8 -*-
from django.conf.urls import url

from training import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/training/$',
        views.TrainingIndexView.as_view(), name='training_index'
    ),
    url(
        r'^(?P<lang>\w{2})/training/(?P<slug>[-\w]{1,150})/$',
        views.TrainingCategoryView.as_view(), name='training_category'
    ),
    url(
        r'^(?P<lang>\w{2})/training/page/(?P<page>[0-9]{1,4})/$',
        views.TrainingCategoryView.as_view(), name='training_category_with_page'
    ),
    url(
        r'^(?P<lang>\w{2})/training/course/(?P<slug>[-\w]{1,150})/$',
        views.CourseView.as_view(), name='course_page'
    )
)
