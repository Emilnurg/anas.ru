# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from forms.enums import FormRequestReadStatusEnum, CallbackFormPlaceEnum, FeedbackFormPlaceEnum
from snippets.models import LastModMixin, BasicModel


class BaseFormRequest(LastModMixin, BasicModel):
    """Базовая модель для всех хранимых форм"""
    language = models.CharField(
        _('Язык'), max_length=6, default=settings.DEFAULT_LANGUAGE, choices=settings.LANGUAGES
    )
    read_status = models.SmallIntegerField(
        _('Статус прочтения'), choices=FormRequestReadStatusEnum.get_choices(),
        default=FormRequestReadStatusEnum.UNREAD
    )

    email_fields = ('language',)

    class Meta:
        abstract = True


class BaseNamePhoneRequest(BaseFormRequest):
    """Базовая модель для всех хранимых форм с именем и телефоном"""
    name = models.CharField(_('Имя'), max_length=255)
    telephone = models.CharField(_('Телефон'), max_length=100)

    email_fields = BaseFormRequest.email_fields + ('name', 'telephone')

    class Meta:
        abstract = True

    def __str__(self):
        return '%s (%s)' % (self.name, self.telephone)


class CallbackFormRequest(BaseNamePhoneRequest):
    """Запросы заказа звонка"""
    place = models.CharField(
        _('Расположение формы'), blank=True, null=True, max_length=50,
        choices=CallbackFormPlaceEnum.get_choices()
    )

    email_fields = BaseNamePhoneRequest.email_fields + ('place',)

    class Meta:
        verbose_name = _('Заказ звонка')
        verbose_name_plural = _('Заказы звонка')


class FeedbackFormRequest(BaseNamePhoneRequest):
    """Запросы обратной связи"""
    comment = models.TextField(_('Вопрос'), max_length=32768)
    place = models.CharField(
        _('Расположение формы'), blank=True, null=True, max_length=50,
        choices=FeedbackFormPlaceEnum.get_choices()
    )

    email_fields = BaseNamePhoneRequest.email_fields + ('comment', 'place')

    class Meta:
        verbose_name = _('Запрос обратной связи')
        verbose_name_plural = _('Обратная связь')


class ProductProposalRequest(BaseNamePhoneRequest):
    """Запрос КП по продукту"""
    product = models.ForeignKey(
        'catalog.Product', verbose_name=_('Продукт'), related_name='question_proposals'
    )
    email = models.EmailField(_('E-mail'))

    email_fields = ('product', ) + BaseNamePhoneRequest.email_fields + ('email',)

    class Meta:
        verbose_name = _('Запрос КП по продукту')
        verbose_name_plural = _('Запросы КП по продуктам')

    def __str__(self):
        return '%s: %s <%s>' % (self.product.title, self.name, self.email)


class ProductQuestionRequest(BaseFormRequest):
    """Вопрос по продукту"""
    product = models.ForeignKey(
        'catalog.Product', verbose_name=_('Продукт'), related_name='question_requests'
    )
    name = models.CharField(_('Имя'), max_length=255)
    email = models.EmailField(_('E-mail'))
    comment = models.TextField(_('Комментарий'), max_length=32768)

    email_fields = ('product',) + BaseFormRequest.email_fields + ('name', 'email', 'comment')

    class Meta:
        verbose_name = _('Вопрос по продукту')
        verbose_name_plural = _('Вопросы по продуктам')

    def __str__(self):
        return '%s: %s <%s>' % (self.product.title, self.name, self.email)


class PurchaseFormRequest(BaseNamePhoneRequest):
    """Запросы закупки"""
    product = models.ForeignKey(
        'catalog.Product', verbose_name=_('Продукт'), related_name='purchase_requests',
        blank=True, null=True
    )
    comment = models.TextField(_('Комментарий'), max_length=32768, blank=True, null=True)

    email_fields = ('product',) + BaseNamePhoneRequest.email_fields + ('comment',)

    class Meta:
        verbose_name = _('Запрос по закупке')
        verbose_name_plural = _('Закупка')


class ServiceFormRequest(BaseNamePhoneRequest):
    """Запросы сервисного центра"""
    email = models.EmailField(_('E-mail'))
    comment = models.TextField(_('Проблема'), max_length=32768, blank=True, null=True)

    email_fields = BaseNamePhoneRequest.email_fields + ('email', 'comment')

    class Meta:
        verbose_name = _('Запрос сервисного центра')
        verbose_name_plural = _('Сервисный центр')


class SupportFormRequest(BaseFormRequest):
    """Запросы сервисного центра"""
    category = models.ForeignKey(
        'support.SupportCategory', verbose_name=_('Категория сервисного цнтра'),
        blank=True, null=True, related_name='form_requests'
    )
    name = models.CharField(_('Имя'), max_length=255)
    email = models.EmailField(_('E-mail, куда придет ответ'))
    product_code = models.CharField(_('Полное название товара, серия'), max_length=255)
    comment = models.TextField(_('Сообщение'), max_length=32768, blank=True, null=True)

    email_fields = BaseFormRequest.email_fields + (
        'category', 'name', 'email', 'product_code', 'comment'
    )

    class Meta:
        verbose_name = _('Запрос тех.поддержки')
        verbose_name_plural = _('Тех.поддержка')

    def __str__(self):
        return '%s <%s>' % (self.name, self.email)


class TrainingFormRequest(BaseNamePhoneRequest):
    """Запросы на обучение"""
    course = models.ForeignKey(
        'training.Course', verbose_name=_('Курс'), related_name=_('course_requests'),
        blank=True, null=True
    )

    email_fields = ('course',) + BaseNamePhoneRequest.email_fields

    class Meta:
        verbose_name = _('Запрос на обучение')
        verbose_name_plural = _('Обучение')
