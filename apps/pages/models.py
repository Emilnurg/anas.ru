# -*- coding: utf-8 -*-
from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from django.utils.translation import ugettext_lazy as _

from solo.models import SingletonModel

from base.enums import IconEnum
from snippets.models import BaseModel, BasicModel


class AboutPage(BasicModel, SingletonModel):
    """Страница "О компании" """
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    subtitle = RichTextUploadingField(
        _('Подзаголовок страницы'), max_length=4096, blank=True, null=True
    )
    bg = models.ImageField(_('Фон'), max_length=255, upload_to='pages', blank=True, null=True)

    quote_image = models.ImageField(
        _('Фото в цитате'), max_length=255, upload_to='about', blank=True, null=True
    )
    quote = RichTextUploadingField(_('Цитата'), blank=True, null=True)
    quoted_person = models.CharField(
        _('Цитируемый человек'), max_length=255, blank=True, null=True
    )
    main_body = RichTextUploadingField(_('Главный контент'), blank=True, null=True)
    guarantee_title = models.CharField(
        _('Заголовок гарантий'), max_length=255, blank=True, null=True
    )
    guarantee_body = models.TextField(_('Контент гарантий'), blank=True, null=True)

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

    class Meta:
        verbose_name = _('Страница "О компании"')

    def __str__(self):
        return str(_('Страница "О компании"'))


class AboutAdvantage(BaseModel):
    """Преимущества на странице "О компании" """
    about_page = models.ForeignKey(
        AboutPage, verbose_name=_('Страница "О компании"'), related_name='advantages'
    )
    icon = models.CharField(
        _('Иконка'), choices=IconEnum.get_choices(), blank=True, null=True, max_length=50
    )
    title = models.CharField(_('Заголовок'), max_length=255)
    subtitle = RichTextUploadingField(_('Подзаголовок'), max_length=255, blank=True, null=True)

    translation_fields = ('title', 'subtitle')

    class Meta:
        verbose_name = _('Преимущество')
        verbose_name_plural = _('Преимущества на странице "О компании"')

    def __str__(self):
        return self.title


class ContactsPage(BasicModel, SingletonModel):
    """Страница "Контакты" """
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    address = models.TextField(_('Адрес в контактах'), max_length=4096, blank=True, null=True)

    map_y = models.FloatField(_('Координата Y (широта)'), blank=True, default=.0)
    map_x = models.FloatField(_('Координата X (долгота)'), blank=True, default=.0)
    map_zoom = models.PositiveSmallIntegerField(
        _('Масштаб карты'), choices=[(x, str(x)) for x in range(1, 21)], default=16
    )

    questions_title = models.CharField(
        _('Заголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )
    questions_subtitle = models.CharField(
        _('Подзаголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )

    translation_fields = (
        'title', 'address', 'map_x', 'map_y', 'map_zoom', 'questions_title', 'questions_subtitle'
    )

    def __str__(self):
        return str(_('Страница "Контакты"'))

    class Meta:
        verbose_name = _('Страница "Контакты"')


class HomePage(BasicModel, SingletonModel):
    """Главная страница"""
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    projects_title = models.CharField(
        _('Заголовок блока проектов'), max_length=100, blank=True, null=True
    )
    projects_subtitle = models.TextField(
        _('Подзаголовок блока проектов'), blank=True, null=True
    )
    projects_button = models.CharField(
        _('Текст кнопки блока проектов'), max_length=30, blank=True, null=True
    )

    questions_title = models.CharField(
        _('Заголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )
    questions_subtitle = models.TextField(
        _('Подзаголовок блока "Есть вопросы?"'), blank=True, null=True
    )

    how_we_work_title = models.CharField(
        _('Заголовок блока "Как мы работаем с клиентами"'), max_length=100, blank=True, null=True
    )
    how_we_work_subtitle = models.TextField(
        _('Подзаголовок блока "Как мы работаем с клиентами"'), blank=True, null=True
    )
    how_we_work_image = models.ImageField(
        _('Фото в блоке  блока "Как мы работаем с клиентами"'), max_length=255, upload_to='about',
        blank=True, null=True
    )

    translation_fields = (
        'title', 'projects_title', 'projects_subtitle', 'projects_button', 'questions_title',
        'questions_subtitle', 'how_we_work_title', 'how_we_work_subtitle'
    )

    class Meta:
        verbose_name = _('Главная страница')

    def __str__(self):
        return str(_('Главная страница'))


class PartnersPage(BasicModel, SingletonModel):
    """Страница "Партнеры" """
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    subtitle = RichTextUploadingField(
        _('Подзаголовок страницы'), max_length=4096, blank=True, null=True
    )

    howto_title = models.CharField(
        _('Заголовок блока "Как стать дилером?"'), max_length=255, blank=True, null=True
    )
    howto_subtitle = models.CharField(
        _('Подзаголовок блока "Как стать дилером?"'), max_length=255, blank=True, null=True
    )
    howto_body = RichTextUploadingField(
        _('Контент блока "Как стать дилером?"'), blank=True, null=False
    )
    howto_button_caption = models.CharField(
        _('Текст кнопки блока "Как стать дилером?"'), max_length=50, blank=True, null=True
    )

    questions_title_left = models.CharField(
        _('Заголовок блока "Есть вопросы? (слева)"'), max_length=255, blank=True, null=True
    )
    questions_title = models.CharField(
        _('Заголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )
    questions_subtitle = models.TextField(
        _('Подзаголовок блока "Есть вопросы?"'), blank=True, null=True
    )

    translation_fields = (
        'title', 'subtitle', 'howto_title', 'howto_subtitle', 'howto_body', 'howto_button_caption',
        'questions_title_left', 'questions_title', 'questions_subtitle'
    )

    def __str__(self):
        return str(_('Страница "Дилеры"'))

    class Meta:
        verbose_name = _('Страница "Дилеры"')


class ServiceCenterPage(BasicModel, SingletonModel):
    """Страница "Сервисный центр" """
    title = models.CharField(_('Заголовок страницы'), max_length=255)
    subtitle = RichTextUploadingField(
        _('Подзаголовок страницы'), max_length=4096, blank=True, null=True
    )

    bg = models.ImageField(_('Фон'), max_length=255, upload_to='pages', blank=True, null=True)

    body = RichTextUploadingField(_('Контент'), blank=True, null=False)

    request_order_title = models.CharField(
        _('Заголовок блока "Порядок обращения"'), max_length=255, blank=True, null=True
    )

    questions_title = models.CharField(
        _('Заголовок блока "Есть вопросы?"'), max_length=255, blank=True, null=True
    )
    questions_subtitle = models.TextField(
        _('Подзаголовок блока "Есть вопросы?"'), blank=True, null=True
    )
    questions_image_left = models.ImageField(
        _('Изображения блока "Есть вопросы?" (слева)'), max_length=255, blank=True, null=True,
        upload_to='pages'
    )
    questions_image_right = models.ImageField(
        _('Изображения блока "Есть вопросы?" (справа)'), max_length=255, blank=True, null=True,
        upload_to='pages'
    )

    translation_fields = (
        'title', 'subtitle', 'body', 'request_order_title',
        'questions_title', 'questions_subtitle'
    )

    def __str__(self):
        return str(_('Страница "Сервисный центр"'))

    class Meta:
        verbose_name = _('Страница "Сервисный центр"')


class ServiceRequestOrder(BaseModel):
    """Преимущества на странице "О компании" """
    service_center_page = models.ForeignKey(
        ServiceCenterPage, verbose_name=_('Страница "Сервисный центр"'),
        related_name='request_order'
    )
    icon = models.FileField(
        _('Иконка'), blank=True, null=True, max_length=255, upload_to='service'
    )
    title = models.CharField(_('Заголовок'), max_length=255)
    subtitle = RichTextUploadingField(_('Подзаголовок'), max_length=255, blank=True, null=True)

    translation_fields = ('title', 'subtitle')

    class Meta:
        verbose_name = _('Порядок обращения в сервисный центр')
        verbose_name_plural = _('Порядок обращения в сервисный центр')

    def __str__(self):
        return self.title
