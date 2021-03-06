# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-05-31 13:01
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0010_auto_20170530_0116'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicerequestorder',
            name='subtitle_en',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, max_length=255, null=True, verbose_name='Подзаголовок'),
        ),
        migrations.AddField(
            model_name='servicerequestorder',
            name='subtitle_fr',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, max_length=255, null=True, verbose_name='Подзаголовок'),
        ),
        migrations.AddField(
            model_name='servicerequestorder',
            name='subtitle_ru',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, max_length=255, null=True, verbose_name='Подзаголовок'),
        ),
        migrations.AddField(
            model_name='servicerequestorder',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Заголовок'),
        ),
        migrations.AddField(
            model_name='servicerequestorder',
            name='title_fr',
            field=models.CharField(max_length=255, null=True, verbose_name='Заголовок'),
        ),
        migrations.AddField(
            model_name='servicerequestorder',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Заголовок'),
        ),
        migrations.AlterField(
            model_name='servicerequestorder',
            name='icon',
            field=models.FileField(blank=True, max_length=255, null=True, upload_to='service', verbose_name='Иконка'),
        ),
    ]
