# -*- coding: utf-8 -*-
from django.conf import settings
from django.contrib import admin
from django.contrib.admin.exceptions import DisallowedModelAdminToField
from django.contrib.admin.options import TO_FIELD_VAR
from django.contrib.admin.utils import unquote
from django.template import engines
from django.utils.translation import ugettext_lazy as _

from jinja2.filters import do_wordwrap

from forms import models
from forms.enums import FormRequestReadStatusEnum
from snippets.admin import IsNullFieldListFilter


class BaseFormRequestAdmin(admin.ModelAdmin):
    """Базовый класс для админ.части запросов из форм"""
    date_hierarchy = 'created'
    list_display = ('id', 'language', 'created')
    list_filter = ('read_status', 'language')
    ordering = ('-created',)
    search_fields = ('=id',)

    @staticmethod
    def suit_row_attributes(obj, request):
        return {'class': 'is-unread' if obj.read_status < 0 else 'is-read'}

    def change_view(self, request, object_id, form_url='', extra_context=None):
        """Отмечает запрос как прочитанный"""
        if object_id:

            to_field = request.POST.get(TO_FIELD_VAR, request.GET.get(TO_FIELD_VAR))
            if to_field and not self.to_field_allowed(request, to_field):
                raise DisallowedModelAdminToField("The field %s cannot be referenced." % to_field)

            obj = self.get_object(request, unquote(object_id), to_field)
            if obj and obj.read_status < 0:
                obj.read_status = FormRequestReadStatusEnum.READ
                obj.save()

        return super(BaseFormRequestAdmin, self).change_view(
            request, object_id, form_url=form_url, extra_context=extra_context
        )


class BaseNamePhoneRequestAdmin(BaseFormRequestAdmin):
    """Базовый класс для админ.части запросов из форм с именем и телефоном"""
    list_display = ('id', 'name', 'telephone', 'language', 'created')
    list_display_links = ('id', 'name')
    search_fields = BaseFormRequestAdmin.search_fields + ('name', 'telephone')


class CommentAdminMixin(admin.ModelAdmin):
    def __init__(self, model, admin_site):
        super().__init__(model, admin_site)
        self.jinja2_env = engines['jinja2'].env

    def comment_short(self, obj):
        return do_wordwrap(self.jinja2_env, obj.comment, width=30, break_long_words=False)

    comment_short.allow_tags = False
    comment_short.short_description = _('Комментарий')


@admin.register(models.Comment)
class CommentAdmin(CommentAdminMixin, BaseFormRequestAdmin):
    """Админ.часть для комментариев"""
    list_display = (
        'id', 'name', 'telephone_email', 'comment_short', 'is_answer', 'language', 'created'
    )
    list_display_links = ('id', 'name')
    # noinspection PyTypeChecker
    list_filter = BaseFormRequestAdmin.list_filter + (
        'content_type', ('parent', IsNullFieldListFilter)
    )
    raw_id_fields = ('parent', 'upload')
    search_fields = BaseFormRequestAdmin.search_fields + (
        'name', 'telephone_email', 'comment', 'object_id'
    )

    def __init__(self, model, admin_site):
        super().__init__(model, admin_site)
        self.jinja2_env = engines['jinja2'].env

    def is_answer(self, obj):
        return bool(obj.parent_id)

    is_answer.allow_tags = False
    is_answer.short_description = _('Ответ')


@admin.register(models.EducationFormRequest)
class EducationFormRequestAdmin(BaseNamePhoneRequestAdmin):
    """Админ.часть запросов на обучение"""
    list_display = BaseNamePhoneRequestAdmin.list_display + ('comment_short',)
    list_filter = BaseNamePhoneRequestAdmin.list_filter + ('course',)
    search_fields = list(BaseNamePhoneRequestAdmin.search_fields) + ['comment']


@admin.register(models.FeedbackFormRequest)
class FeedbackFormRequestAdmin(CommentAdminMixin, BaseNamePhoneRequestAdmin):
    """Админ.часть запросов обратной связи"""
    list_display = BaseNamePhoneRequestAdmin.list_display + ('comment_short',)
    search_fields = BaseNamePhoneRequestAdmin.search_fields + ('comment',)


FeedbackFormRequestAdmin.comment_short.short_description = _('Вопрос')


@admin.register(models.PartnershipFormRequest)
class PartnershipFormRequestAdmin(CommentAdminMixin, BaseNamePhoneRequestAdmin):
    """Админ.часть запросов сотрудничества"""
    list_display = BaseNamePhoneRequestAdmin.list_display + ('comment_short',)
    search_fields = BaseNamePhoneRequestAdmin.search_fields + ('comment',)


@admin.register(models.PurchaseFormRequest)
class PurchaseFormRequestAdmin(CommentAdminMixin, BaseNamePhoneRequestAdmin):
    """Админ.часть запросов закупки"""
    list_display = BaseNamePhoneRequestAdmin.list_display + ('comment_short',)
    list_filter = BaseNamePhoneRequestAdmin.list_filter + ('product__categories',)
    search_fields = list(BaseNamePhoneRequestAdmin.search_fields) + ['comment']
    for language in settings.LANGUAGE_CODES:
        search_fields.append('product__title_' + language)


@admin.register(models.ProductProposalRequest)
class ProductProposalRequestAdmin(CommentAdminMixin, BaseNamePhoneRequestAdmin):
    """Админ.часть запросов КП по товарам"""
    list_display = BaseNamePhoneRequestAdmin.list_display + ('comment_short',)
    list_filter = BaseNamePhoneRequestAdmin.list_filter + ('product__categories',)
    search_fields = list(BaseNamePhoneRequestAdmin.search_fields) + ['comment']
    for language in settings.LANGUAGE_CODES:
        search_fields.append('product__title_' + language)


@admin.register(models.ProductQuestionRequest)
class ProductQuestionRequestAdmin(CommentAdminMixin, BaseNamePhoneRequestAdmin):
    """Админ.часть вопросов по товарам"""
    list_display = BaseNamePhoneRequestAdmin.list_display + ('comment_short',)
    list_filter = BaseNamePhoneRequestAdmin.list_filter + ('product__categories',)
    search_fields = list(BaseNamePhoneRequestAdmin.search_fields) + ['comment']
    for language in settings.LANGUAGE_CODES:
        search_fields.append('product__title_' + language)


@admin.register(models.ServiceFormRequest)
class ServiceFormRequestAdmin(CommentAdminMixin, BaseNamePhoneRequestAdmin):
    """Админ.часть для запросов сервисного центра"""
    list_display = BaseNamePhoneRequestAdmin.list_display + ('comment_short', 'email')
    search_fields = BaseNamePhoneRequestAdmin.search_fields + ('comment', 'email')


ServiceFormRequestAdmin.comment_short.short_description = _('Проблема')


@admin.register(models.SupportFormRequest)
class SupportFormRequestAdmin(CommentAdminMixin, BaseFormRequestAdmin):
    """Админ.часть для запросов тех.поддержки"""
    list_display = (
        'id', 'name', 'email', 'product_code', 'comment_short', 'language', 'created'
    )
    list_display_links = ('id', 'name')
    search_fields = BaseFormRequestAdmin.search_fields + (
        'name', 'email', 'product_code', 'comment'
    )


SupportFormRequestAdmin.comment_short.short_description = _('Сообщение')
