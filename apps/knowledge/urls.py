# -*- coding: utf-8 -*-
from django.conf.urls import url

from knowledge import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/knowledge/$',
        views.KnowledgeIndexView.as_view(), name='knowledge_index'
    ),
)
