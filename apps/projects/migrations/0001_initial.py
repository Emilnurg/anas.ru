# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-06 15:53
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion
import image_cropping.fields
import snippets.utils.datetime


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('title', models.CharField(db_index=True, max_length=255, verbose_name='Заголовок')),
                ('title_ru', models.CharField(db_index=True, max_length=255, null=True, verbose_name='Заголовок')),
                ('title_en', models.CharField(db_index=True, max_length=255, null=True, verbose_name='Заголовок')),
                ('title_fr', models.CharField(db_index=True, max_length=255, null=True, verbose_name='Заголовок')),
                ('slug', models.SlugField(help_text='Разрешены только латинские символы, цифры, символ подчеркивания и дефис (минус)', max_length=150, unique=True, verbose_name='Алиас')),
                ('publish_date', models.DateTimeField(db_index=True, default=snippets.utils.datetime.utcnow, help_text='Можно задать на будущее', verbose_name='Дата публикации')),
                ('image', image_cropping.fields.ImageCropField(blank=True, max_length=255, null=True, upload_to='news', verbose_name='Изображение')),
                ('thumb_list', image_cropping.fields.ImageRatioField('image', '200x400', adapt_rotation=False, allow_fullsize=False, free_crop=False, help_text=None, hide_image_field=False, size_warning=False, verbose_name='Эскиз в списке')),
                ('excerpt', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Анонс')),
                ('excerpt_ru', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Анонс')),
                ('excerpt_en', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Анонс')),
                ('excerpt_fr', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Анонс')),
                ('body', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', verbose_name='Контент')),
                ('body_ru', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', null=True, verbose_name='Контент')),
                ('body_en', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', null=True, verbose_name='Контент')),
                ('body_fr', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', null=True, verbose_name='Контент')),
            ],
            options={
                'verbose_name': 'Проект',
                'verbose_name_plural': 'Реализованные проекты',
            },
        ),
        migrations.CreateModel(
            name='ProjectSection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('title', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок секции')),
                ('title_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок секции')),
                ('title_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок секции')),
                ('title_fr', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок секции')),
                ('body', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', verbose_name='Контент')),
                ('body_ru', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', null=True, verbose_name='Контент')),
                ('body_en', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', null=True, verbose_name='Контент')),
                ('body_fr', ckeditor_uploader.fields.RichTextUploadingField(blank=True, help_text='Выводится выше всех секций', null=True, verbose_name='Контент')),
                ('gallery', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='project_sections', to='core.Gallery', verbose_name='Галерея фотографий')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sections', to='projects.Project', verbose_name='Проект')),
            ],
            options={
                'verbose_name': 'Секция проекта',
                'verbose_name_plural': 'Секции проекта',
            },
        ),
    ]
