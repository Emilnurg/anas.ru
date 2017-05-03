# -*- coding: utf-8 -*-
from collections import OrderedDict

from django.utils.translation import ugettext_lazy as _

from snippets.models import BaseEnumerate


class UploadTypeEnum(BaseEnumerate):
    GENERIC_UPLOAD = ''
    IMAGE_UPLOAD = 'image'
    VIDEO_UPLOAD = 'video'

    values = OrderedDict((
        (IMAGE_UPLOAD, _('Изображение')),
        # (VIDEO_UPLOAD, _('Видео')),
        # (GENERIC_UPLOAD, _('Файл'))
    ))
