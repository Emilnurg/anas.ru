# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from easy_thumbnails.exceptions import EasyThumbnailsError
from easy_thumbnails.files import get_thumbnailer


class ImageMixin(models.Model):
    image_field = 'image'

    def image_thumb(self):
        try:
            return '<img src="%s" alt="" />' % get_thumbnailer(
                getattr(self, self.image_field)
            ).get_thumbnail({
                'size': (0, 40),
                'detail': True,
            }).url if getattr(self, self.image_field) else \
                '<img src="%simages/blank.gif" alt="" ' \
                'style="width:50px;height:40px;" />' % settings.STATIC_URL
        except (OSError, EasyThumbnailsError):
            return ''

    image_thumb.allow_tags = True
    image_thumb.short_description = _('Изображение')

    class Meta:
        abstract = True
