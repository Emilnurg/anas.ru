# -*- coding: utf-8 -*-
from snippets.template_backends.jinja2 import jinjaglobal
from training import models


@jinjaglobal
def get_training_categories():
    return models.TrainingCategory.objects.published().order_by('ordering')
