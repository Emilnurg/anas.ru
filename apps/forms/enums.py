# -*- coding: utf-8 -*-
from django.utils.translation import ugettext_lazy as _

from collections import OrderedDict

from snippets.models import BaseEnumerate


class FormRequestReadStatusEnum(BaseEnumerate):
    """Статус прочтения запроса формы"""
    UNREAD = -1
    READ = 1

    values = OrderedDict((
        (UNREAD, _('Новый')),
        (READ, _('Прочитан'))
    ))
