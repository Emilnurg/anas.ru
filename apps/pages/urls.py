# -*- coding: utf-8 -*-
from django.conf.urls import url

from pages import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/contacts/$',
        views.ContactsView.as_view(), name='contacts'
    ),
)
