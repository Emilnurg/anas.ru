# -*- coding: utf-8 -*-
from django.conf.urls import url

from knowledge import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/knowledge/$',
        views.KnowledgeIndexView.as_view(), name='knowledge_index'
    ),
    url(
        r'^(?P<lang>\w{2})/knowledge/page/(?P<page>[0-9]{1,4})/$',
        views.KnowledgeIndexView.as_view(), name='knowledge_index_with_page'
    ),
    url(
        r'^(?P<lang>\w{2})/knowledge/(?P<slug>[-\w]{1,150})/$',
        views.KnowledgeIndexView.as_view(), name='knowledge_category'
    ),
    url(
        r'^(?P<lang>\w{2})/knowledge/(?P<slug>[-\w]{1,150})/page/(?P<page>[0-9]{1,4})/$',
        views.KnowledgeIndexView.as_view(), name='knowledge_category_with_page'
    ),
    url(
        r'^(?P<lang>\w{2})/knowledge/article/(?P<slug>[-\w]{1,150})/$',
        views.KnowledgeView.as_view(), name='knowledge_page'
    )
)
