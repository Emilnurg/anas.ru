# -*- coding: utf-8 -*-
from django.conf.urls import url

from forms import views


urlpatterns = (
    url(
        r'^(?P<lang>\w{2})/forms/comment/$',
        views.CommentView.as_view(), name='comment'
    ),
    url(
        r'^(?P<lang>\w{2})/forms/education/$',
        views.EducationRequestView.as_view(), name='education'
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
