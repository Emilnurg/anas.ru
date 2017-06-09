# -*- coding: utf-8 -*-
from django.conf import settings

from snippets.template_backends.jinja2 import jinjaglobal


@jinjaglobal
def discus_account():
    return settings.DISCUS_ACCOUNT
