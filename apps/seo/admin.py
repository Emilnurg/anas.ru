# -*- coding: utf-8 -*-
from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from seo import models
from snippets.admin import BaseModelAdmin


class SEOAdminMixin(object):
    """Миксин для админки"""
    suit_form_tabs = (('general', _('Основное')), ('seo', 'SEO'))


class RobotDisallowInline(admin.TabularInline):
    """Директивы Disallow"""
    extra = 0
    fields = models.RobotDisallow().collect_fields()
    model = models.RobotDisallow
    ordering = ('ordering',)


class RobotAllowInline(admin.TabularInline):
    """Директивы Allow"""
    extra = 0
    fields = models.RobotAllow().collect_fields()
    model = models.RobotAllow
    ordering = ('ordering',)


class RobotCleanparamInline(admin.TabularInline):
    """Директивы Clean-param"""
    extra = 0
    fields = models.RobotCleanparam().collect_fields()
    model = models.RobotCleanparam
    ordering = ('ordering',)


class RobotSitemapInline(admin.TabularInline):
    """Директивы Sitemap"""
    extra = 0
    fields = models.RobotSitemap().collect_fields()
    model = models.RobotSitemap
    ordering = ('ordering',)


@admin.register(models.Robot)
class RobotAdmin(BaseModelAdmin):
    """Роботы (User-Agent)"""
    fields = models.Robot().collect_fields()
    list_display = ('id', 'title', 'host', 'ordering', 'status')
    list_display_links = ('id', 'title')
    inlines = (RobotDisallowInline, RobotAllowInline, RobotCleanparamInline, RobotSitemapInline)
    save_as = True
    search_fields = ('title', 'host')


@admin.register(models.SEOPage)
class SEOPageAdmin(BaseModelAdmin):
    """SEO-параметры страниц"""
    fields = models.SEOPage().collect_fields()
    list_display = ('url', 'seo_title', 'ordering', 'status', 'created')
    search_fields = ('url', 'seo_title', 'seo_keywords', 'seo_description')


@admin.register(models.Redirect)
class RedirectAdmin(BaseModelAdmin):
    """HTTP-редиректы"""
    fields = models.Redirect().collect_fields()
    list_display = ('old_path', 'new_path', 'http_code', 'ordering', 'status', 'created')
    search_fields = ('old_path', 'new_path', 'http_code')
