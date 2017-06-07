# -*- coding: utf-8 -*-
from django.conf.urls import url

from popups import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/popups/callback/$',
        views.CallbackPopupView.as_view(), name='callback'
    ),
    url(
        r'^(?P<lang>\w{2})/popups/thanks/callback/$',
        views.ThanksCallbackPopupView.as_view(), name='thanks_callback'
    ),
    url(
        r'^(?P<lang>\w{2})/popups/thanks/request/$',
        views.ThanksRequestPopupView.as_view(), name='thanks_request'
    ),
    url(
        r'^(?P<lang>\w{2})/popups/commercial-proposal/(?P<slug>[-\w]{1,150})/$',
        views.CommercialProposalPopupView.as_view(), name='commercial_proposal'
    ),
    url(
        r'^(?P<lang>\w{2})/popups/product-question/(?P<slug>[-\w]{1,150})/$',
        views.ProductQuestionlPopupView.as_view(), name='product_question'
    )
)
