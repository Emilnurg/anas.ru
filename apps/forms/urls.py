# -*- coding: utf-8 -*-
from django.conf.urls import url

from forms import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/forms/training/$',
        views.TrainingRequestView.as_view(), name='training'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/callback/$',
        views.CallbackRequestView.as_view(), name='callback'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/feedback/$',
        views.FeedbackRequestView.as_view(), name='feedback'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/partnership/$',
        views.PartnershipRequestView.as_view(), name='partnership'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/product/proposal/$',
        views.ProductProposalRequestView, name='product_proposal'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/product/question/$',
        views.ProductQuestionRequestView, name='product_question'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/purchase/$',
        views.PurchaseRequestView.as_view(), name='purchase'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/service/$',
        views.ServiceRequestView.as_view(), name='service'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/support/$',
        views.SupportRequestView.as_view(), name='support'
    )
)
