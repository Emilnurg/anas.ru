# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-05-31 19:56
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SupportQuestion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('title', models.CharField(db_index=True, max_length=255, verbose_name='Вопрос')),
                ('title_ru', models.CharField(db_index=True, max_length=255, null=True, verbose_name='Вопрос')),
                ('title_en', models.CharField(db_index=True, max_length=255, null=True, verbose_name='Вопрос')),
                ('title_fr', models.CharField(db_index=True, max_length=255, null=True, verbose_name='Вопрос')),
                ('body', ckeditor_uploader.fields.RichTextUploadingField(blank=True, verbose_name='Ответ')),
                ('body_ru', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Ответ')),
                ('body_en', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Ответ')),
                ('body_fr', ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Ответ')),
            ],
            options={
                'verbose_name': 'Вопрос тех. поддержки',
                'verbose_name_plural': 'Вопросы тех. поддержки',
            },
        ),
        migrations.CreateModel(
            name='SupportSection',
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
            ],
            options={
                'verbose_name': 'Раздел тех. поддержки',
                'verbose_name_plural': 'Разделы тех. поддержки',
            },
        ),
        migrations.AddField(
            model_name='supportquestion',
            name='sections',
            field=models.ManyToManyField(blank=True, related_name='questions', to='support.SupportSection', verbose_name='Разделы тех. поддержки'),
        ),
    ]
