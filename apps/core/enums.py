# -*- coding: utf-8 -*-
from collections import OrderedDict

from django.utils.translation import ugettext_lazy as _

from snippets.models import BaseEnumerate


class BlockBgEnum(BaseEnumerate):
    BLUE = 'blue'
    PINK = 'pink'

    values = OrderedDict((
        (BLUE, _('Голубой')),
        (PINK, _('Розовый'))
    ))
