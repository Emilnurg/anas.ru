# -*- coding: utf-8 -*-
from django.apps import AppConfig as BaseAppConfig
from django.utils.translation import ugettext_lazy as _


class AppConfig(BaseAppConfig):
    name = 'knowledge'
    verbose_name = _('База знаний')

    def ready(self):
        from knowledge import signals  # flake8: NOQA
