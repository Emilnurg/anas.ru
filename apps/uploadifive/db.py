# -*- coding: utf-8 -*-
from random import choice

from django.core.signing import TimestampSigner, BadSignature, SignatureExpired
from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import ugettext_lazy as _

from uploadifive import NONCE_CHARACTERS, NONCE_LENGTH, NONCE_MAX_AGE


class NonceException(Exception):
    pass


class NonceManager(models.Manager):
    @staticmethod
    def random_nonce(prefix=''):
        return prefix + ''.join(
            [choice(NONCE_CHARACTERS) for x in range(NONCE_LENGTH-len(prefix))]
        )

    def provision(self, prefix='', user=None):
        nonce = self.random_nonce(prefix)
        user_id = user.pk if user else ''
        payload = '%s:%s' % (nonce, user_id)

        signer = TimestampSigner()
        return signer.sign(payload)

    def lookup(self, signed):
        if signed is None:
            raise NonceException(_('Токен не указан.'))

        signer = TimestampSigner()
        try:
            payload = signer.unsign(signed, max_age=NONCE_MAX_AGE)
        except SignatureExpired:
            raise NonceException(_('Токен устарел.'))
        except BadSignature:
            raise NonceException(_('Токен неверный.'))

        nonce, user_id = payload.split('|')

        user_klass = get_user_model()
        user = user_klass.objects.get(pk=user_id) if user_id else None

        nonce_list = list(self.get_queryset().filter(key=nonce)[:1])

        if nonce_list:
            nonce_obj = nonce_list[0]
            if nonce_obj.user == user:
                return nonce_obj
            else:
                raise NonceException(_('Текущий пользователь не имеет доступа к токену.'))
        else:
            return self.model(key=nonce, user=user)

    def generate_new(self, prefix='', user=None):
        while True:
            candidate = self.random_nonce(prefix)
            if not self.filter(key=candidate).exists():
                return self.get_queryset().create(key=candidate, user=user)
