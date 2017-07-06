# -*- coding: utf-8 -*-
from django.core.paginator import EmptyPage, InvalidPage
from django.http import Http404, HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.urls import reverse

from pure_pagination import Paginator

from base import ARTICLES_PER_PAGE
from snippets.models.enumerates import StatusEnum
from snippets.models.siblings import get_siblings
from snippets.views import BaseTemplateView, BaseView
from training import models


class TrainingIndexView(BaseView):
    """Главная страница обучения"""

    @staticmethod
    def get(request, *args, **kwargs):
        category = models.TrainingCategory.objects.published().first()
        if not category:
            raise Http404

        return HttpResponseRedirect(category.get_absolute_url(request.LANGUAGE_CODE))


class TrainingCategoryView(BaseTemplateView):
    """Страница категории курсов"""
    template_name = 'training/training_category.html'

    def get_context_data(self, **kwargs):
        kwargs = super(TrainingCategoryView, self).get_context_data(**kwargs)

        current_category = get_object_or_404(
            models.TrainingCategory.objects.published(), slug__exact=kwargs.get('slug')
        )

        courses_list = current_category.courses \
            .published() \
            .select_related('city') \
            .order_by('ordering')

        # paginator
        paginator_page = None
        page = self.get_page()
        paginator = Paginator(courses_list, ARTICLES_PER_PAGE, allow_empty_first_page=False)

        try:
            paginator_page = paginator.page(page)
            courses_list = paginator_page.object_list
        except (EmptyPage, InvalidPage):
            courses_list = []

        kwargs['view'].request.active_url = reverse(
            'training:training_index', kwargs={'lang': kwargs.get('lang')}
        )

        kwargs.update(
            base_url=reverse(
                'training:training_category',
                kwargs={'lang': kwargs.get('lang'), 'slug': current_category.slug}
            ),
            courses_list=courses_list,
            current_category=current_category,
            paginator_page=paginator_page
        )
        return kwargs


class CourseView(BaseTemplateView):
    """Страница курса"""
    template_name = 'training/course.html'

    def get_context_data(self, **kwargs):
        kwargs = super(CourseView, self).get_context_data(**kwargs)
        kwargs['view'].request.active_url = reverse(
            'training:training_index', kwargs={'lang': kwargs.get('lang')}
        )
        base_qs = models.Course.objects.published().actual()

        current_course = get_object_or_404(base_qs, slug__exact=kwargs.get('slug'))
        siblings = get_siblings(base_qs.order_by('ordering'), current_course.pk)

        category = current_course.categories.published().first()
        if category:
            list_url = category.get_absolute_url(kwargs.get('lang'))
        else:
            list_url = reverse('training:training_index', kwargs={'lang': kwargs.get('lang')})

        teachers = models.CourseTeacher.objects.published()\
            .filter(course=current_course, teacher__status=StatusEnum.PUBLIC)\
            .order_by('ordering')

        about_blocks = current_course.about_blocks.published().order_by('ordering')

        kwargs['view'].request.active_url = reverse(
            'training:training_index', kwargs={'lang': kwargs.get('lang')}
        )

        kwargs.update(
            about_blocks=about_blocks,
            category=category,
            current_course=current_course,
            list_url=list_url,
            siblings=siblings,
            teachers=teachers,
            schedule=current_course.schedule.published().order_by('ordering')
        )
        return kwargs
