# -*- coding: utf-8 -*-
from django import forms
from django.utils.translation import ugettext_lazy as _

from catalog.models import Product
from training.models import Course
from forms import models


class BaseRequestForm(forms.ModelForm):
    """Базовый класс для форм запросов с сайта"""
    class Meta:
        fields = '__all__'
        exclude = ('read_status',)


class CallbackRequestForm(BaseRequestForm):
    """Форма заказа звонка"""
    class Meta:
        model = models.CallbackFormRequest
        fields = '__all__'
        exclude = ('read_status',)


class FeedbackRequestForm(BaseRequestForm):
    """Форма обратной связи"""
    class Meta:
        model = models.FeedbackFormRequest
        fields = '__all__'
        exclude = ('read_status',)


class ProductProposalRequestForm(BaseRequestForm):
    """Форма КП по продукту"""
    product = forms.ModelChoiceField(
        label=_('Продукт'), queryset=Product.objects.published(), required=True
    )

    class Meta:
        model = models.ProductProposalRequest
        fields = '__all__'
        exclude = ('read_status',)


class ProductQuestionRequestForm(BaseRequestForm):
    """Форма вопроса по продукту"""
    product = forms.ModelChoiceField(
        label=_('Продукт'), queryset=Product.objects.published(), required=True
    )

    class Meta:
        model = models.ProductQuestionRequest
        fields = '__all__'
        exclude = ('read_status',)


class PurchaseRequestForm(BaseRequestForm):
    """Форма закупки"""
    product = forms.ModelChoiceField(
        label=_('Продукт'), queryset=Product.objects.published(), required=True
    )

    class Meta:
        model = models.PurchaseFormRequest
        fields = '__all__'
        exclude = ('read_status',)


class ServiceRequestForm(BaseRequestForm):
    """Форма сервисного центра"""
    class Meta:
        model = models.ServiceFormRequest
        fields = '__all__'
        exclude = ('read_status',)


class SupportRequestForm(BaseRequestForm):
    """Форма поддержки"""
    class Meta:
        model = models.SupportFormRequest
        fields = '__all__'
        exclude = ('read_status',)


class TrainingFormRequestForm(BaseRequestForm):
    """Форма заявки на обучение"""
    course = forms.ModelChoiceField(
        label=_('Курс'), queryset=Course.objects.published(), required=False
    )

    class Meta:
        model = models.TrainingFormRequest
        fields = '__all__'
        exclude = ('read_status',)
