# -*- coding: utf-8 -*-
from django.conf.urls import url

from uploadifive import views


urlpatterns = (
    url(
        r'^nonce/$',
        views.NonceView.as_view(), name='upload_get_nonce'
    ),
    url(
        r'^(?P<upload_type>[a-z]{1,30})/$',
        views.UploadView.as_view(), name='upload_with_type'
    ),
    url(
        r'^$',
        views.UploadView.as_view(), name='upload'
    )
)
