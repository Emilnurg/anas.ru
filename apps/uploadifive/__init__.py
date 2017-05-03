# -*- coding: utf-8 -*-
default_app_config = 'uploadifive.apps.AppConfig'
__version__ = '0.0.1'

VERSION = __version__

NONCE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
NONCE_LENGTH = 50

NONCE_MAX_AGE = 60 * 60 * 24
