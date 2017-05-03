# -*- coding: utf-8 -*-
from django.core.signing import TimestampSigner

from snippets.template_backends.jinja2 import jinjaglobal
from uploadifive.models import Nonce


@jinjaglobal
def nonce(request, prefix=''):
    """Генерирует ключ для загрузки"""
    user = request.user if request.user.is_authenticated() else None
    nonce_obj = Nonce.objects.generate_new(prefix, user=user)
    signer = TimestampSigner()
    return signer.sign(nonce_obj.key + '|' + (str(user.id) if user else ''))
