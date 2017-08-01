# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-08-01 18:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0014_homepage'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='page_title',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок страницы сверху'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='page_title_en',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок страницы сверху'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='page_title_fr',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок страницы сверху'),
        ),
        migrations.AddField(
            model_name='homepage',
            name='page_title_ru',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок страницы сверху'),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='how_we_work_image',
            field=models.ImageField(blank=True, max_length=255, null=True, upload_to='about', verbose_name='Фото в блоке "Как мы работаем с клиентами"'),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='title',
            field=models.CharField(max_length=255, verbose_name='Заголовок страницы (SEO)'),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='title_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Заголовок страницы (SEO)'),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='title_fr',
            field=models.CharField(max_length=255, null=True, verbose_name='Заголовок страницы (SEO)'),
        ),
        migrations.AlterField(
            model_name='homepage',
            name='title_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Заголовок страницы (SEO)'),
        ),
    ]
