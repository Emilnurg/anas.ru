# -*- coding: utf-8 -*-
from django.shortcuts import get_object_or_404
from django.urls import reverse

from snippets.models.siblings import get_siblings
from snippets.views import BaseTemplateView
from training import models


class TrainingIndexView(BaseTemplateView):
    """Главная страница обучения"""
    template_name = 'training/training_index.html'

    def get_context_data(self, **kwargs):
        kwargs = super(TrainingIndexView, self).get_context_data(**kwargs)

        kwargs['courses_list'] = models.Course.objects\
            .published()\
            .select_related('city')\
            .order_by('ordering')
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
        list_url = reverse('training:training_index', kwargs={'lang': kwargs.get('lang')})

        kwargs.update(
            current_course=current_course,
            list_url=list_url,
            siblings=siblings,
            teachers=models.CourseTeacher.objects.published().filter(course=current_course)
            .order_by('ordering'),
            schedule=current_course.schedule.published().order_by('ordering')
        )
        return kwargs
