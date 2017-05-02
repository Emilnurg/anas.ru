# -*- coding: utf-8 -*-
from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from seo import models


class SEOAdminMixin(object):
    """Миксин для админки"""
    suit_form_tabs = (('general', _('Основное')), ('seo', 'SEO'))


class RobotDisallowInline(admin.TabularInline):
    """Директивы Disallow"""
    model = models.RobotDisallow
    extra = 0
    fields = ('url_pattern', 'ordering', 'status')


class RobotAllowInline(admin.TabularInline):
    """Директивы Allow"""
    model = models.RobotAllow
    extra = 0
    fields = ('url_pattern', 'ordering', 'status')


class RobotCleanparamInline(admin.TabularInline):
    """Директивы Clean-param"""
    model = models.RobotCleanparam
    extra = 0
    fields = ('params', 'url_pattern', 'ordering', 'status')


class RobotSitemapInline(admin.TabularInline):
    """Директивы Sitemap"""
    model = models.RobotSitemap
    extra = 0
    fields = ('url', 'ordering', 'status')


@admin.register(models.Robot)
class RobotAdmin(admin.ModelAdmin):
    """Роботы (User-Agent)"""
    list_display = ('id', 'title', 'host', 'ordering', 'status')
    search_fields = ('title', 'host')
    list_editable = ('ordering', 'status')
    save_as = True
    fields = ('title', 'host', 'crawl_delay', 'ordering', 'status')
    inlines = (RobotDisallowInline, RobotAllowInline, RobotCleanparamInline, RobotSitemapInline)


@admin.register(models.SEOPage)
class SEOPageAdmin(admin.ModelAdmin):
    list_display = ('url', 'seo_title', 'ordering', 'status', 'created')
    search_fields = ('url', 'seo_title', 'seo_keywords', 'seo_description')
    fields = ('url', 'seo_title', 'seo_description', 'seo_keywords', 'ordering', 'status')
    list_editable = ('ordering', 'status')
    list_filter = ('status',)


@admin.register(models.Redirect)
class RedirectAdmin(admin.ModelAdmin):
    list_display = ('old_path', 'new_path', 'http_code', 'ordering', 'updated')
    search_fields = ('old_path', 'new_path', 'http_code')
    list_filter = ('status',)
    fields = models.Redirect().collect_fields()
