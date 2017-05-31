# -*- coding: utf-8 -*-
from snippets.template_backends.jinja2 import jinjaglobal
from support import models


@jinjaglobal
def get_support_categories():
    return models.SupportCategory.objects.published().order_by('ordering')
