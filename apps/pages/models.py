# -*- coding: utf-8 -*-
from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from django.utils.translation import ugettext_lazy as _
from image_cropping import ImageCropField, ImageRatioField

from solo.models import SingletonModel

from base.enums import IconEnum
from snippets.models import BaseModel, BasicModel


class AboutPage(BasicModel, SingletonModel):
    """Страница "О компании" """
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    subtitle = RichTextUploadingField(_('Подзаголовок'), max_length=4096, blank=True, null=True)

    quote_image = ImageCropField(
        _('Фото в цитате'), max_length=255, upload_to='about', blank=True, null=True
    )
    quote_thumb = ImageRatioField('quote_image', '110x110', verbose_name=_('Эскиз в цитате'))
    quote = RichTextUploadingField(_('Цитата'), blank=True, null=True)
    quoted_person = models.CharField(
        _('Цитируемый человек'), max_length=255, blank=True, null=True
    )
    main_body = RichTextUploadingField(_('Главный контент'), blank=True, null=True)
    guarantee_title = models.CharField(
        _('Заголовок гарантий'), max_length=255, blank=True, null=True
    )
    guarantee_body = RichTextUploadingField(_('Контент гарантий'), blank=True, null=True)

    questions_title = models.CharField(
        _('Заголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )
    questions_subtitle = models.TextField(
        _('Подзаголовок блока "Есть вопросы?"'), blank=True, null=True
    )

    translation_fields = (
        'title', 'subtitle', 'quote_image', 'quote', 'quoted_person', 'main_body',
        'guarantee_title', 'guarantee_body', 'questions_title', 'questions_subtitle'
    )

    def __str__(self):
        return _('Страница "О компании"')

    class Meta:
        verbose_name = _('Страница "О компании"')


class AboutAdvantage(BasicModel, BaseModel):
    """Преимущества на странице "О компании" """
    about_page = models.ForeignKey(
        AboutPage, verbose_name=_('Страница "О компании"'), related_name='advantages'
    )
    icon = models.CharField(
        _('Иконка'), choices=IconEnum.get_choices(), blank=True, null=True, max_length=50
    )
    title = models.CharField(_('Заголовок'), max_length=255)
    subtitle = RichTextUploadingField(_('Подзаголовок'), max_length=255, blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Преимущество')
        verbose_name_plural = _('Преимущества на странице "О компании"')


class ContactsPage(BasicModel, SingletonModel):
    """Страница "Контакты" """
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    address = models.TextField(_('Адрес в контактах'), max_length=4096, blank=True, null=True)
    questions_title = models.CharField(
        _('Заголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )
    questions_subtitle = models.CharField(
        _('Подзаголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )
    map_y = models.FloatField(_('Координата Y (широта)'))
    map_x = models.FloatField(_('Координата X (долгота)'))
    map_zoom = models.PositiveSmallIntegerField(
        _('Масштаб карты'), choices=[(x, str(x)) for x in range(1, 21)], default=16
    )

    translation_fields = (
        'title', 'address', 'questions_title', 'questions_subtitle', 'map_x', 'map_y', 'map_zoom'
    )

    def __str__(self):
        return _('Страница "Контакты"')

    class Meta:
        verbose_name = _('Страница "Контакты"')


class HomePage(BasicModel, SingletonModel):
    """Главная страница"""
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    subtitle = RichTextUploadingField(_('Подзаголовок'), max_length=4096, blank=True, null=True)

    translation_fields = ('title', 'subtitle')

    def __str__(self):
        return _('Главная страница')

    class Meta:
        verbose_name = _('Главная страница')


class HomeAdvantage(BaseModel):
    """Преимущества на главной странице"""
    home_page = models.ForeignKey(
        HomePage, verbose_name=_('Главная страница'), related_name='advantages'
    )
    icon = models.CharField(
        _('Иконка'), choices=IconEnum.get_choices(), blank=True, null=True, max_length=50
    )
    title = models.CharField(_('Заголовок'), max_length=255)

    translation_fields = ('title',)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Преимущество')
        verbose_name_plural = _('Преимущества на странице "О компании"')
