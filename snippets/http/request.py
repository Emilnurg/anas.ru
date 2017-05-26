# -*- coding: utf-8 -*-


def get_page(page):
    """Получает номер страницы пагинации"""
    try:
        page = int(page)
    except ValueError:
        page = 1

    if page < 1:
        page = 1

    return page
