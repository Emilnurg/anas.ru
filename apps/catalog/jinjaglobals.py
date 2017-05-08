# -*- coding: utf-8 -*-
from catalog.api import get_categories_tree
from snippets.template_backends.jinja2 import jinjaglobal


@jinjaglobal
def categories_tree():
    return get_categories_tree()
