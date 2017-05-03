# -*- coding: utf-8 -*-
from django.conf import settings
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.utils.translation import ugettext_lazy as _

from forms.enums import FormRequestReadStatusEnum
from snippets.models import LastModMixin, BasicModel, BaseManager
from snippets.models.enumerates import StatusEnum
from uploadifive.models import Upload


class BaseFormRequest(LastModMixin, BasicModel):
    """Базовая модель для всех хранимых форм"""
    language = models.CharField(
        _('Язык'), max_length=6, default=settings.DEFAULT_LANGUAGE, choices=settings.LANGUAGES
    )
    read_status = models.SmallIntegerField(
        _('Статус прочтения'), choices=FormRequestReadStatusEnum.get_choices(),
        default=FormRequestReadStatusEnum.UNREAD
    )

    class Meta:
        abstract = True


class BaseNamePhoneRequest(BaseFormRequest):
    """Базовая модель для всех хранимых форм с именем и телефоном"""
    name = models.CharField(_('Имя'), max_length=255)
    telephone = models.CharField(_('Телефон'), max_length=100)

    class Meta:
        abstract = True

    def __str__(self):
        return '%s (%s)' % (self.name, self.telephone)


class Comment(BaseFormRequest):
    """Комментарий"""
    name = models.CharField(_('Имя и фамилия'), max_length=255)
    telephone_email = models.CharField(_('Телефон или email'), max_length=254)
    comment = models.TextField(_('Комментарий'), max_length=32768)
    upload = models.ForeignKey(
        Upload, verbose_name=_('Аватар'), related_name='comments', blank=True, null=True
    )

    limit = models.Q(app_label='catalog', model='product') | \
        models.Q(app_label='press', model='news') | \
        models.Q(app_label='projects', model='project')
    content_type = models.ForeignKey(
        ContentType, verbose_name=_('Тип объекта'), limit_choices_to=limit
    )
    object_id = models.PositiveIntegerField(_('ID объекта'))
    content_object = GenericForeignKey('content_type', 'object_id')

    parent = models.ForeignKey(
        'self', related_name='children', verbose_name=_('Ответы'), blank=True
    )
    status = models.SmallIntegerField(
        _('Статус'), default=StatusEnum.DRAFT, choices=StatusEnum.get_choices(),
        help_text=_('При отключении публикации будут скрываться и ответы на комментарий')
    )
    admin_comment = models.TextField(
        _('Комментарий'), help_text=_('для внутренного использования, не выводится на сайте!'),
        blank=True, null=True
    )

    objects = BaseManager()

    class Meta:
        verbose_name = _('Комментарий')
        verbose_name_plural = _('Комментарии')


class EducationFormRequest(BaseNamePhoneRequest):
    """Запросы на обучение"""
    # TODO ссылка на обучение

    class Meta:
        verbose_name = _('Запрос на обучение')
        verbose_name_plural = _('Обучение')


class FeedbackFormRequest(BaseNamePhoneRequest):
    """Запросы обратной связи"""
    comment = models.TextField(_('Вопрос'), max_length=32768, blank=True, null=True)

    class Meta:
        verbose_name = _('Запрос обратной связи')
        verbose_name_plural = _('Обратная связь')


class PartnershipFormRequest(BaseNamePhoneRequest):
    """Запросы сотрудничества"""
    comment = models.TextField(_('Комментарий'), max_length=32768, blank=True, null=True)

    class Meta:
        verbose_name = _('Запрос сотрудничества')
        verbose_name_plural = _('Сотрудничество')


class ProductProposalRequest(BaseNamePhoneRequest):
    """Запрос КП по продукту"""
    product = models.ForeignKey(
        'catalog.Product', verbose_name=_('Продукт'), related_name=_('question_proposals')
    )
    email = models.EmailField(_('E-mail'))
    comment = models.TextField(_('Комментарий'), max_length=32768, blank=True, null=True)

    class Meta:
        verbose_name = _('Запрос КП по продукту')
        verbose_name_plural = _('Запросы КП по продуктам')


class ProductQuestionRequest(BaseNamePhoneRequest):
    """Вопрос по продукту"""
    product = models.ForeignKey(
        'catalog.Product', verbose_name=_('Продукт'), related_name=_('question_requests')
    )
    email = models.EmailField(_('E-mail'))
    comment = models.TextField(_('Комментарий'), max_length=32768, blank=True, null=True)

    class Meta:
        verbose_name = _('Вопрос по продукту')
        verbose_name_plural = _('Вопросы по продуктам')


class PurchaseFormRequest(BaseNamePhoneRequest):
    """Запросы закупки"""
    product = models.ForeignKey(
        'catalog.Product', verbose_name=_('Продукт'), related_name=_('purchase_requests')
    )
    comment = models.TextField(_('Комментарий'), max_length=32768, blank=True, null=True)

    class Meta:
        verbose_name = _('Запрос закупки')
        verbose_name_plural = _('Закупка')


class ServiceFormRequest(BaseNamePhoneRequest):
    """Запросы сервисного центра"""
    email = models.EmailField(_('E-mail'))
    comment = models.TextField(_('Проблема'), max_length=32768, blank=True, null=True)

    class Meta:
        verbose_name = _('Запрос сервисного центра')
        verbose_name_plural = _('Сервисный центр')
