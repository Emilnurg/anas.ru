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


class CallbackFormPlaceEnum(BaseEnumerate):
    """Расположение формы заказа звонка"""
    ABOUT = 'about'
    POPUP = 'popup'

    values = OrderedDict((
        (ABOUT, _('О компании')),
        (POPUP, _('Попап'))
    ))


class FeedbackFormPlaceEnum(BaseEnumerate):
    """Расположение формы заказа звонка"""
    HOMEPAGE = 'home'
    CONTACTS = 'contacts'
    PARTNERS = 'partners'

    values = OrderedDict((
        (HOMEPAGE, _('Главная')),
        (CONTACTS, _('Контакты')),
        (PARTNERS, _('Партнеры'))
    ))
