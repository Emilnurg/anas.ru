# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _

from seo.db import RedirectCodes, SEOMixin
from snippets.models import BaseModel, BaseManager


class SEOPage(BaseModel, SEOMixin):
    """SEO properties"""
    url = models.CharField(
        _('Ссылка (URL)'), max_length=255, blank=False, null=False,
        db_index=True, unique=True,
        help_text=_(
            'Введите URL страницы, параметры которой хотите переопределить, без указания домена! '
            'Например, /ru/sale/'
        )
    )

    def __str__(self):
        return '%s: %s' % (self.url, self.seo_title)

    class Meta:
        verbose_name = _('SEO параметр')
        verbose_name_plural = _('SEO параметры')


class Redirect(BaseModel):
    """Location redirects"""
    old_path = models.CharField(_('Откуда'), max_length=255, blank=False, null=False)
    new_path = models.CharField(_('Куда'), max_length=255, blank=True, null=False)
    http_code = models.PositiveIntegerField(
        _('Код состояния'), blank=False, null=False,
        choices=RedirectCodes.get_choices(), default=RedirectCodes.C301
    )
    objects = BaseManager()

    def save(self, *args, **kwargs):
        result = super(Redirect, self).save(*args, **kwargs)
        from seo.router import router
        router.index()
        return result

    def __str__(self):
        return '%s: %s => %s' % (
            RedirectCodes.values[self.http_code],
            self.old_path,
            self.new_path,
        )

    class Meta:
        verbose_name = _('Редирект')
        verbose_name_plural = _('Редиректы')


class Robot(BaseModel):
    """Робот для robots.txt"""
    title = models.CharField(_('Имя робота'), max_length=254, blank=False, null=False)
    host = models.CharField(_('Host'), max_length=254, blank=True, null=True)
    crawl_delay = models.DecimalField(
        _('Crawl-delay'), blank=True, null=True, decimal_places=1, max_digits=5
    )
    objects = BaseManager()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _('Робот (User-agent)')
        verbose_name_plural = _('Robots.txt')


class RobotDisallow(BaseModel):
    """Строка запрета для робота"""
    robot = models.ForeignKey(
        Robot, verbose_name=_('Робот'), blank=False, null=False, related_name='disallows'
    )
    url_pattern = models.CharField(_('Шаблон (ссылка)'), max_length=254, blank=False, null=False)
    objects = BaseManager()

    class Meta:
        verbose_name = _('Disallow')
        verbose_name_plural = _('Disallow (Запреты)')


class RobotAllow(BaseModel):
    """Строка разрешения для робота"""
    robot = models.ForeignKey(
        Robot, verbose_name=_('Робот'), blank=False, null=False, related_name='allows'
    )
    url_pattern = models.CharField(_('Шаблон ссылки'), max_length=254, blank=False, null=False)
    objects = BaseManager()

    class Meta:
        verbose_name = _('Allow')
        verbose_name_plural = _('Allow (Разрешения)')


class RobotCleanparam(BaseModel):
    """Строка Clean-param для робота"""
    robot = models.ForeignKey(
        Robot, verbose_name=_('Робот'), blank=False, null=False, related_name='clean_params'
    )
    params = models.CharField(_('Параметры'), max_length=254, blank=False, null=False)
    url_pattern = models.CharField(_('Шаблон ссылки'), max_length=254, blank=False, null=False)
    objects = BaseManager()

    class Meta:
        verbose_name = _('Clean-param')
        verbose_name_plural = _('Параметры Clean-param')


class RobotSitemap(BaseModel):
    """Строка Sitemap для робота"""
    robot = models.ForeignKey(
        Robot, verbose_name=_('Робот'), blank=False, null=False, related_name='sitemaps'
    )
    url = models.CharField(_('Sitemap'), max_length=254, blank=False, null=False)
    objects = BaseManager()

    class Meta:
        verbose_name = _('Sitemap')
        verbose_name_plural = _('Sitemap (Карты сайта XML)')
