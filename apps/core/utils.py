# -*- coding: utf-8 -*-
from django.http.response import Http404
from django.shortcuts import get_object_or_404

from core import models
from snippets.models.enumerates import StatusEnum


def get_page(slug, raise_error=True):
    """Получает простую страницу по алиасу"""
    try:
        page = get_object_or_404(models.Page, slug__exact=slug, status=StatusEnum.PUBLIC)
    except Http404 as e:
        if raise_error:
            raise e
        else:
            page = None
    return page


def get_partners():
    """Получает список партнеров"""
    return models.Partner.objects.published().order_by('ordering')
