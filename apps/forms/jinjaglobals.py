# -*- coding: utf-8 -*-
from django.conf import settings

from snippets.template_backends.jinja2 import jinjaglobal


@jinjaglobal
def google_recaptcha_public_key():
    return settings.RECAPTCHA_PUBLIC_KEY
