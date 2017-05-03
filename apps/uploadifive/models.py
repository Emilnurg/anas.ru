# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from snippets.models import LastModMixin
from snippets.models.image import ImageMixin
from uploadifive import NONCE_LENGTH
from uploadifive.db import NonceManager
from uploadifive.enums import UploadTypeEnum
from uploadifive.utils import upload_path_generator


class Nonce(LastModMixin):
    """Токены"""
    key = models.CharField(
        _('Токен'), max_length=NONCE_LENGTH, unique=True, blank=False, null=False
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, verbose_name=_('Пользователь'),
        blank=True, null=True, related_name='nonces'
    )
    objects = NonceManager()

    class Meta:
        verbose_name = _('Токен')
        verbose_name_plural = _('Токены')

    def __str__(self):
        return (_('Ключ для UID#{user_id}: {key}').format(user_id=self.user_id, key=self.key))\
            if self.user_id else _('Ключ: %s') % self.key


class Upload(ImageMixin, LastModMixin):
    """Файл загрузки"""
    image_field = 'data'
    data = models.FileField(
        'Файл', max_length=254, upload_to=upload_path_generator,
        blank=False, null=False,
        help_text=_('Будьте осторожны при переходе по ссылке! Файлы могут содержать опасный код.')
    )
    filetype = models.CharField(
        _('Тип файла'), max_length=16, choices=UploadTypeEnum.get_choices(),
        blank=True, null=False, default=UploadTypeEnum.GENERIC_UPLOAD
    )
    filename = models.CharField(_('Наименование'), max_length=254, blank=False, null=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, verbose_name=_('Пользователь'),
        blank=True, null=True, related_name='uploads'
    )
    obtained = models.BooleanField(_('Использован'), blank=False, null=False, default=False)

    def data_img(self):
        if self.filetype != UploadTypeEnum.IMAGE_UPLOAD:
            return '<a href="%s">%s</a>' % (self.data.url, self.filename)
        return self.image_thumb()
    data_img.allow_tags = True
    data_img.short_description = _('Файл')
    data_img.admin_order_field = 'data'

    def __str__(self):
        return self.filename

    class Meta:
        verbose_name = _('Файл загрузки')
        verbose_name_plural = _('Файлы загрузки')


class UploadMixin(models.Model):
    """Миксин для моделей с возможностью загрузки файлов"""
    files = models.ManyToManyField(Upload, blank=True, verbose_name=_('Файлы'))

    class Meta:
        abstract = True

    def files_list(self):
        """Выводит список файлов объекта"""
        files = self.files.all()
        result = '<ul class="order-files-list">'
        for file_obj in files:
            result += '<li><a href="%s%s" target="_blank">%s</a></li>' % (
                settings.SITE_URL, file_obj.data.url, file_obj.filename)
        result += '</ul>'
        return result

    def attach_file(self, attachment):
        """
        Добавляет файл к текущему объекту
        attachment - путь к файлу относительно MEDIA_URL
        """
        try:
            upload = Upload.objects.get(data=attachment, obtained=False)
            self.files.add(upload)
            upload.obtained = True
            upload.save()
        except (Upload.DoesNotExist, Upload.MultipleObjectsReturned):
            return False

        return True
