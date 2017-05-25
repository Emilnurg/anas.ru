# -*- coding: utf-8 -*-
from collections import OrderedDict

from django.utils.translation import ugettext_lazy as _

from snippets.models import BaseEnumerate


class ImagePositionEnum(BaseEnumerate):
    """Варианты позиций изображения в блоке"""
    LEFT = 'left'
    CENTER = 'center'
    RIGHT = 'right'

    values = OrderedDict((
        (LEFT, _('Слева')),
        (CENTER, _('Посередине')),
        (RIGHT, _('Снизу справа'))
    ))

    default = CENTER


class CatalogBlockShapeEnum(BaseEnumerate):
    """Форма блоков товаров каталога"""
    NORMAL = 'normal'
    HIGH = 'high'

    values = OrderedDict((
        (NORMAL, _('Нормальная')),
        (HIGH, _('Высокая'))
    ))

    default = NORMAL

