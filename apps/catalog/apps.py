# -*- coding: utf-8 -*-
from django.apps import AppConfig as BaseAppConfig
from django.utils.translation import ugettext_lazy as _


class AppConfig(BaseAppConfig):
    name = 'catalog'
    verbose_name = _('Каталог')

    def ready(self):
        from catalog import signals  # flake8: NOQA
