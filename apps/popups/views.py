# -*- coding: utf-8 -*-
from django.shortcuts import get_object_or_404

from catalog.models import Product
from snippets.views import BaseTemplateView


class CallbackPopupView(BaseTemplateView):
    """Попап обратного звонка"""
    template_name = 'popups/callback.html'


class ThanksCallbackPopupView(BaseTemplateView):
    """Попап благодарности за запрос звонка"""
    template_name = 'popups/thanks_callback.html'


class ThanksRequestPopupView(BaseTemplateView):
    """Попап благодарности за запрос"""
    template_name = 'popups/thanks_request.html'


class BaseProductPopup(BaseTemplateView):
    """Базовое представление попапов товаров"""

    def get_context_data(self, **kwargs):
        kwargs = super(BaseProductPopup, self).get_context_data(**kwargs)
        kwargs['current_product'] = get_object_or_404(
            Product.objects.published(), slug__exact=kwargs.get('slug')
        )
        return kwargs


class CommercialProposalPopupView(BaseProductPopup):
    """Попап вопроса по товару"""
    template_name = 'popups/commercial_proposal.html'


class ProductQuestionlPopupView(BaseProductPopup):
    """Попап вопроса по товару"""
    template_name = 'popups/product_question.html'
