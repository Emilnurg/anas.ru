# -*- coding: utf-8 -*-
from django.apps import AppConfig as BaseAppConfig
from django.utils.translation import ugettext_lazy as _


class AppConfig(BaseAppConfig):
    name = 'uploadifive'
    verbose_name = _('Загрузки с сайта')
