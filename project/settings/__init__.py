# -*- coding: utf-8 -*-
import os

from django.core.urlresolvers import reverse_lazy

from easy_thumbnails.conf import Settings as ThumbnailSettings


def gettext_noop(s):
    return s


PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE_ROOT = os.path.dirname(PROJECT_DIR)

ENV = 'production'
DEBUG = False

ADMINS = (
    ('Rafael Kamashev', 'wizzzet@gmail.com'),
)
MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'anas',
        'USER': 'anas',
        'PASSWORD': 'anas',
        'HOST': 'localhost',
        'PORT': '5433',
    }
}

TIME_ZONE = 'Europe/Moscow'
LANGUAGE_CODE = 'ru-RU'
LANGUAGES = (
    ('ru', gettext_noop('Русский')),
    ('en', gettext_noop('English')),
    ('fr', gettext_noop('Français'))
)
LANGUAGE_CODES = tuple([x[0] for x in LANGUAGES])
LANGUAGE_CODES_PUBLIC = ('ru', 'en')
DEFAULT_LANGUAGE = MODELTRANSLATION_DEFAULT_LANGUAGE = LANGUAGES[0][0]

MODELTRANSLATION_CUSTOM_FIELDS = ('RichTextUploadingField',)

SITE_ID = 1
SITE_NAME = 'anas.ru'
SITE_PROTOCOL = 'https://'

USE_I18N = True
USE_L10N = True
USE_TZ = True

MEDIA_ROOT = os.path.normpath(os.path.join(SITE_ROOT, 'public', 'media'))
MEDIA_URL = '/media/'

STATIC_ROOT = os.path.normpath(os.path.join(SITE_ROOT, 'public', 'static'))
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.normpath(os.path.join(SITE_ROOT, 'static')),
)
STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder'
)

SECRET_KEY = r'*94xc1v)usc!er=ly8@9)%^+c=esbv)u2sc!uo:oy8@9dy@c3orj5o++#!qcq5'

template_context_processors = (
    'django.contrib.auth.context_processors.auth',
    'django.template.context_processors.debug',
    'django.template.context_processors.i18n',
    'django.template.context_processors.media',
    'django.template.context_processors.static',
    'django.template.context_processors.tz',
    'django.contrib.messages.context_processors.messages',
    'django.template.context_processors.request'
)
TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [
        os.path.join(SITE_ROOT, 'templates'),
    ],
    'OPTIONS': {
        'context_processors': template_context_processors,
        'debug': DEBUG,
        'loaders': (
            (
                'django.template.loaders.cached.Loader',
                (
                    'django.template.loaders.filesystem.Loader',
                    'django.template.loaders.app_directories.Loader'
                )
            ),
        )
    }
}, {
    'BACKEND': 'django.template.backends.jinja2.Jinja2',
    'DIRS': [
        os.path.join(SITE_ROOT, 'templates'),
    ],
    'APP_DIRS': True,
    'OPTIONS': {
        'autoescape': False,
        'cache_size': 1000000 if DEBUG else -1,
        'auto_reload': DEBUG,
        'environment': 'snippets.template_backends.jinja2.environment',
        'extensions': (
            'jinja2.ext.i18n',
            'snippets.jinjaglobals.SpacelessExtension',
            'snippets.jinjaglobals.CacheExtension'
        )
    }
}]

MESSAGE_STORAGE = 'django.contrib.messages.storage.session.SessionStorage'

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    # 'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'snippets.middlewares.language.LanguageMiddleware',
    'snippets.seo.middleware.SEOMiddleware',
    'snippets.middlewares.compress.CompressMiddleware'
)

ROOT_URLCONF = 'project.urls'

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'modeltranslation',
    'suit',
    'django.contrib.admin',
    'mptt',
    'ckeditor',
    'ckeditor_uploader',
    'solo',
    'easy_thumbnails',
    'image_cropping',
    # базовые компоненты проекта (переопределяет контрибы веб-студии)
    'base',
    # контрибы веб-студии
    'snippets.general',
    # приложения проекта
    'catalog',
    'core',
    'dicts',
    'training',
    'support',
    'forms',
    'knowledge',
    'pages',
    'partners',
    'projects',
    'press',
    'search',
    'snippets.seo',
    'uploadifive',
    'users',
    'popups'
)

LOGIN_URL = reverse_lazy('auth_login')
LOGIN_REDIRECT_URL = '/'
LOGIN_ALWAYS_REQUIRED = False
# url, которые игнорируются при проверке входа
LOGIN_EXEMPT_URLS = (r'^media/.*', '^api/.*')

AUTH_USER_MODEL = 'users.User'
AUTHENTICATION_BACKENDS = ('django.contrib.auth.backends.ModelBackend',)

DATE_FORMAT = 'd.m.Y'
DATETIME_FORMAT = 'd.m.Y H:i:s'
DATE_INPUT_FORMATS = (
    '%Y-%m-%d',
    '%m/%d/%Y',
    '%m/%d/%y',
    '%b %d %Y',
    '%b %d, %Y',
    '%d %b %Y',
    '%d %b, %Y',
    '%B %d %Y',
    '%B %d, %Y',
    '%d %B %Y',
    '%d %B, %Y',
    '%d.%m.%Y'
)
DATETIME_INPUT_FORMATS = (
    '%Y-%m-%d %H:%M:%S',     # '2006-10-25 14:30:59'
    '%Y-%m-%dT%H:%M:%S',
    '%Y-%m-%d %H:%M:%S.%f',  # '2006-10-25 14:30:59.000200'
    '%Y-%m-%d %H:%M',        # '2006-10-25 14:30'
    '%Y-%m-%d',              # '2006-10-25'
    '%m/%d/%Y %H:%M:%S',     # '10/25/2006 14:30:59'
    '%m/%d/%Y %H:%M:%S.%f',  # '10/25/2006 14:30:59.000200'
    '%m/%d/%Y %H:%M',        # '10/25/2006 14:30'
    '%m/%d/%Y',              # '10/25/2006'
    '%m/%d/%y %H:%M:%S',     # '10/25/06 14:30:59'
    '%m/%d/%y %H:%M:%S.%f',  # '10/25/06 14:30:59.000200'
    '%m/%d/%y %H:%M',        # '10/25/06 14:30'
    '%m/%d/%y',              # '10/25/06'
    '%d.%m.%Y %H:%M:%S',
    '%d.%m.%Y %H:%M'
)

DEFAULT_FROM_EMAIL = 'robot@anas.ru'
EMAIL_BATCH_SIZE = 100

SUIT_CONFIG = {
    'SEARCH_URL': 'admin:catalog_product_changelist',
    'ADMIN_NAME': 'АНАС Медикал',
    'MENU_OPEN_FIRST_CHILD': True,
    'MENU': [
        'catalog',
        'base',
        'core',
        'press',
        'knowledge',
        'projects',
        'general',
        'dicts',
        'pages',
        'seo',
        'training',
        'partners',
        'support',
        'forms',
        'users',
        'auth',
        'search'
    ]
}

LOGGING_ROOT = os.path.normpath(os.path.join(SITE_ROOT, 'logs'))

MPTT_ADMIN_LEVEL_INDENT = 20

REDIS_HOST = 'localhost'
REDIS_PORT = 6379
REDIS_DB = 0

CKEDITOR_UPLOAD_PATH = 'upload/'
CKEDITOR_CONFIGS = {
    'default': {
        'height': 100,
        'skin': 'moono-lisa',
        'tabSpaces': 4,
        'title': False,
        'toolbar': [
            ['Source', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],
            ['Undo', 'Redo'],
            ['Bold', 'Italic', 'Strike', 'Subscript', 'Superscript', 'RemoveFormat'],
            ['NumberedList', 'BulletedList'],
            ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
            ['Link', 'Unlink', 'Anchor'],
            ['Image', 'Table', 'SpecialChar', 'Iframe'],
            ['Styles', 'Format', 'FontSize'],
            ['Maximize'],
        ],
        'removePlugins': ','.join([
            'a11yhelp'
        ]),
        'extraPlugins': ','.join([
            'autogrow',
            'clipboard',
            'dialog',
            'dialogui',
            'elementspath'
        ]),
        'undoStackSize': 100
    },
}

CKEDITOR_UPLOAD_SLUGIFY_FILENAME = False
CKEDITOR_IMAGE_BACKEND = 'pillow'
CKEDITOR_BROWSE_SHOW_DIRS = True

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'anas',
    }
}

SEARCH = {
    'host': 'localhost',
    'port': '9200'
}

# cropper
THUMBNAIL_QUALITY = 85
THUMBNAIL_PROGRESSIVE = 100
THUMBNAIL_PRESERVE_EXTENSIONS = ('jpg',)
THUMBNAIL_PROCESSORS = (
    'image_cropping.thumbnail_processors.crop_corners',
    'snippets.utils.thumbnail_processors.remove_alpha_processor'
) + ThumbnailSettings.THUMBNAIL_PROCESSORS

UPLOADIFIVE_IMAGE_MIMETYPES = (
    'image/jpeg',
    'image/gif',
    'image/png',
    'image/jpg',
    'image/tiff',
    'image/bmp',
)

UPLOADIFIVE_GENERIC_MIMETYPES = (
    'application/pdf',
    'text/csv',
    'text/plain',
    'application/msword',
    'text/rtf',
    'application/rtf',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/x-rar-compressed',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
)

UPLOADIFIVE_VIDEO_MIMETYPES = (
    'video/mpeg',
    'video/mp4',
    'video/ogg',
    'video/quicktime',
    'video/webm',
    'video/x-ms-wmv',
    'video/x-flv',
    'video/3gpp',
    'video/3gpp2',
    'video/x-ms-asf',
    'video/x-ms-asf-plugin',
    'video/avi',
    'video/msvideo',
    'video/x-msvideo',
    'application/x-troff-msvideo',
    'video/x-dv',
    'video/dl',
    'video/x-dl',
    'video/x-sgi-movie',
    'video/x-mpeg',
    'video/x-mpeq2a',
    'video/vnd.rn-realvideo',
    'video/x-matroska'
)

DISCUS_ACCOUNT = 'anasmedical'

RECAPTCHA_SECRET = 'XXX-XXX'
RECAPTCHA_PUBLIC_KEY = 'XXX'


try:
    from project.settings.settings_local import *  # NOQA
except ImportError:
    pass


SITE_URL = SITE_PROTOCOL + SITE_NAME
CSRF_TRUSTED_ORIGINS = [SITE_NAME]

TEMPLATES[0]['OPTIONS']['debug'] = DEBUG
TEMPLATES[1]['OPTIONS']['cache_size'] = 1000000 if DEBUG else -1
TEMPLATES[1]['OPTIONS']['auto_reload'] = DEBUG

CORS_ORIGIN_ALLOW_ALL = DEBUG
