# -*- coding: utf-8 -*-
from django.apps import AppConfig as BaseAppConfig
from django.utils.translation import ugettext_lazy as _


class AppConfig(BaseAppConfig):
    name = 'faq'
    verbose_name = _('FAQ')