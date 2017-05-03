# -*- coding: utf-8 -*-
from django import forms
from django.utils.translation import ugettext_lazy as _

from catalog.models import Product
from forms import models


class BaseRequestForm(forms.ModelForm):
    """Базовый класс для форм запросов с сайта"""
    class Meta:
        fields = '__all__'


class CommentForm(BaseRequestForm):
    """Форма комментария"""
    class Meta:
        model = models.Comment
        fields = '__all__'


class EducationFormRequestForm(BaseRequestForm):
    """Форма заявки на обучение"""
    class Meta:
        model = models.EducationFormRequest
        fields = '__all__'


class FeedbackRequestForm(BaseRequestForm):
    """Форма обратной связи"""
    class Meta:
        model = models.FeedbackFormRequest
        fields = '__all__'


class PartnershipRequestForm(BaseRequestForm):
    """Форма сотрудничества"""
    class Meta:
        model = models.PartnershipFormRequest
        fields = '__all__'


class ProductProposalRequestForm(BaseRequestForm):
    """Форма КП по продукту"""

    class Meta:
        model = models.ProductProposalRequest
        fields = '__all__'


class ProductQuestionRequestForm(BaseRequestForm):
    """Форма вопроса по продукту"""
    class Meta:
        model = models.ProductQuestionRequest
        fields = '__all__'


class PurchaseRequestForm(BaseRequestForm):
    """Форма закупки"""
    product = forms.ModelChoiceField(
        label=_('Продукт'), queryset=Product.objects.published(), required=True
    )

    class Meta:
        model = models.PurchaseFormRequest
        fields = '__all__'


class ServiceRequestForm(BaseRequestForm):
    """Форма сервисного центра"""
    class Meta:
        model = models.ServiceFormRequest
        fields = '__all__'
