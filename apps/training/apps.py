# -*- coding: utf-8 -*-
from django.apps import AppConfig as BaseAppConfig
from django.utils.translation import ugettext_lazy as _


class AppConfig(BaseAppConfig):
    name = 'training'
    verbose_name = _('Обучение')

    def ready(self):
        from training import signals  # flake8: NOQA
