# -*- coding: utf-8 -*-
from copy import deepcopy

from django.utils.translation import ugettext_lazy as _

from forms import forms
from snippets.response import success_response, form_validation_error_response
from snippets.views import BaseView


class BaseFormRequestView(BaseView):
    """Базовый обработчик запросов форм"""
    form_class = None
    succes_message = _('Ваш запрос благополучно отправлен')

    def post(self, request, lang, **kwargs):
        data = deepcopy(request.POST)
        data['language'] = lang
        form = self.form_class(data)

        if form.is_valid():
            form.save()
            return success_response(self.succes_message)

        else:
            return form_validation_error_response(form.errors)


class CommentView(BaseFormRequestView):
    """Обработчик формы комментария"""
    form_class = forms.CommentForm


class EducationRequestView(BaseFormRequestView):
    """Обработчик заявки на обучение"""
    form_class = forms.EducationFormRequestForm


class FeedbackRequestView(BaseFormRequestView):
    """Обработчик формы обратной связи"""
    form_class = forms.FeedbackRequestForm


class PartnershipRequestView(BaseFormRequestView):
    """Обработчик формы сотрудничества"""
    form_class = forms.PartnershipRequestForm


class PurchaseRequestView(BaseFormRequestView):
    """Обработчик формы закупки"""
    form_class = forms.PurchaseRequestForm


class ServiceRequestView(BaseFormRequestView):
    """Обработчик формы сервисного центра"""
    form_class = forms.ServiceRequestForm
