# -*- coding: utf-8 -*-
from django import forms

from catalog import models


class ProductModelForm(forms.ModelForm):
    """Форма товара"""

    class Meta:
        model = models.Product
        fields = '__all__'

    def clean_sku(self):
        if self.cleaned_data.get('sku') is '':
            self.cleaned_data['sku'] = None
        return self.cleaned_data['sku']
