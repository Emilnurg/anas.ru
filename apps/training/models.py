# -*- coding: utf-8 -*-
from django.conf import settings
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ckeditor_uploader.fields import RichTextUploadingField
from image_cropping import ImageCropField, ImageRatioField

from base.models import BaseArticle
from snippets.models import BaseModel
from snippets.models.image import ImageMixin


class Teacher(ImageMixin, BaseModel):
    """Преподаватель"""
    title = models.CharField(_('Имя'), max_length=255, db_index=True)
    image = ImageCropField(
        _('Аватар'), max_length=254, blank=True, null=True, upload_to='teachers'
    )
    image_thumb = ImageRatioField('image', '180x180', free_crop=True, verbose_name=_('Эскиз'))

    courses = models.ManyToManyField(
        'Course', verbose_name=_('Курсы'), through='CourseTeacher', blank=True
    )

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Преподаватель')
        verbose_name_plural = _('Преподаватели')

    def __str__(self):
        return self.title


class TrainingCategory(BaseModel):
    """Категории статей курсов"""
    title = models.CharField(_('Заголовок'), max_length=255, db_index=True)
    slug = models.SlugField(
        _('Алиас'), max_length=150, db_index=True, unique=True,
        help_text=_(
            'Разрешены только латинские символы, цифры, символ подчеркивания и дефис (минус)'
        )
    )

    translation_fields = ('title',)

    class Meta:
        verbose_name = _('Категория курсов')
        verbose_name_plural = _('Категории курсов')

    def __str__(self):
        return self.title

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('training:training_category', kwargs={
            'lang': lang,
            'slug': self.slug
        })


class Course(BaseArticle):
    """Курсы (обучение)"""
    date_start = models.DateField(_('Дата начала'), blank=True, null=True)
    date_finish = models.DateField(_('Дата окончания'), blank=True, null=True)

    participants_count = models.PositiveIntegerField(
        _('Количество участников'), blank=True, null=True
    )
    price = models.PositiveIntegerField(_('Цена'), blank=True, null=True)
    city = models.ForeignKey(
        'dicts.City', related_name='courses', verbose_name=_('Город'), blank=True, null=True
    )

    body_about = RichTextUploadingField(_('О курсе'), blank=True, null=True)
    body_detail = RichTextUploadingField(_('Подробная информация'), blank=True, null=True)
    body_schedule = RichTextUploadingField(
        _('Расписание'), blank=True, null=True, help_text=_('Текст над таблицей')
    )
    is_enroll_button = models.BooleanField(_('Выводить кнопку "Записаться"'), default=True)
    bg = models.ImageField(
        _('Фон описания о курсе'), blank=True, null=True, max_length=255, upload_to='courses'
    )

    teachers = models.ManyToManyField(
        Teacher, verbose_name=_('Преподаватели'), through='CourseTeacher', blank=True
    )

    categories = models.ManyToManyField(
        TrainingCategory, verbose_name=_('Категории'), blank=True, related_name='courses'
    )

    translation_fields = BaseArticle.translation_fields + (
        'body_about', 'body_detail', 'body_schedule'
    )

    class Meta:
        verbose_name = _('Курс')
        verbose_name_plural = _('Курсы')

    def get_absolute_url(self, lang=settings.DEFAULT_LANGUAGE):
        return reverse('training:course_page', kwargs={
            'lang': lang,
            'slug': self.slug
        })


class CourseAboutBlock(BaseModel):
    """Блоки описания о курсе"""
    course = models.ForeignKey(Course, verbose_name=_('Курс'), related_name='about_blocks')
    title = models.CharField(_('Заголовок слева'), max_length=255)
    description = models.TextField(_('Описание справа'), blank=True, null=True)

    translation_fields = ('title', 'description')

    class Meta:
        verbose_name = _('Блок описания о курсе')
        verbose_name_plural = _('Блоки описания о курсе')


class CourseTeacher(BaseModel):
    """Преподаватели курсов"""
    course = models.ForeignKey(Course, verbose_name=_('Курс'))
    teacher = models.ForeignKey(Teacher, verbose_name=_('Преподаватель'))
    teacher_role = models.TextField(
        _('Роль преподавателя'), blank=True, null=True, help_text=_('Например, "лектор"')
    )

    translation_fields = ('teacher_role',)

    class Meta:
        verbose_name = _('Преподаватель курса')
        verbose_name_plural = _('Преподаватели курса')


class CourseSchedule(BaseModel):
    """Расписание курса"""
    course = models.ForeignKey(Course, verbose_name=_('Курс'), related_name='schedule')
    period = models.CharField(_('Время от/до'), blank=True, null=False, max_length=100)
    title = models.CharField(_('Мероприятие'), blank=True, null=False, max_length=100)

    translation_fields = ('period', 'title',)

    class Meta:
        verbose_name = _('Строка расписания курса')
        verbose_name_plural = _('Расписание курса')
