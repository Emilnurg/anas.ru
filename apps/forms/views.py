# -*- coding: utf-8 -*-
from copy import deepcopy
from smtplib import SMTPException

import requests
from django.conf import settings
from django.utils.translation import ugettext_lazy as _

from forms import forms
from snippets.http.response import success_response, form_validation_error_response, error_response
from snippets.utils.email import send_trigger_email
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
            if request.POST.get('only_validate'):
                return success_response()

            captcha = request.POST.get('g-recaptcha-response', '')
            if not captcha:
                return error_response(
                    _('Не была проведена проверка на робота. Повторите попытку.')
                )

            r = requests.post('https://www.google.com/recaptcha/api/siteverify', data={
                'secret': settings.RECAPTCHA_SECRET,
                'response': captcha,
                'remoteip': request.META.get('REMOTE_ADDR', '')
            })
            res = r.json()
            if not res.get('success', False):
                return error_response(_('Вы не прошли проверку на робота'))

            obj = form.save()

            event = 'новая отправка формы "%s"' % obj._meta.verbose_name
            try:
                send_trigger_email(
                    event, obj=obj, fields=obj.email_fields, language=request.LANGUAGE_CODE
                )
            except (SMTPException, ConnectionError):
                pass

            return success_response(self.succes_message)

        else:
            return form_validation_error_response(form.errors)


class CallbackRequestView(BaseFormRequestView):
    """Обработчик формы заказа звонка"""
    form_class = forms.CallbackRequestForm


class FeedbackRequestView(BaseFormRequestView):
    """Обработчик формы обратной связи"""
    form_class = forms.FeedbackRequestForm


class ProductProposalRequestView(BaseFormRequestView):
    """Обработчик формы КП по товару"""
    form_class = forms.ProductProposalRequestForm


class ProductQuestionRequestView(BaseFormRequestView):
    """Обработчик формы вопроса по товару"""
    form_class = forms.ProductQuestionRequestForm


class PurchaseRequestView(BaseFormRequestView):
    """Обработчик формы закупки"""
    form_class = forms.PurchaseRequestForm


class ServiceRequestView(BaseFormRequestView):
    """Обработчик формы сервисного центра"""
    form_class = forms.ServiceRequestForm


class SupportRequestView(BaseFormRequestView):
    """Обработчик формы тех.поддержки"""
    form_class = forms.SupportRequestForm


class TrainingRequestView(BaseFormRequestView):
    """Обработчик заявки на обучение"""
    form_class = forms.TrainingFormRequestForm
