# -*- coding: utf-8 -*-


def get_page(request, get_param='p'):
    """Получает номер страницы пагинации"""
    page = request.GET.get(get_param, 0)

    try:
        page = int(page)
    except ValueError:
        page = 1

    if page < 1:
        page = 1

    return page
