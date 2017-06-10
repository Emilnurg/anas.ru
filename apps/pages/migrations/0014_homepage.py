# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-10 07:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0013_partnerspage'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomePage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок страницы')),
                ('title_ru', models.CharField(max_length=255, null=True, verbose_name='Заголовок страницы')),
                ('title_en', models.CharField(max_length=255, null=True, verbose_name='Заголовок страницы')),
                ('title_fr', models.CharField(max_length=255, null=True, verbose_name='Заголовок страницы')),
                ('projects_title', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока проектов')),
                ('projects_title_ru', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока проектов')),
                ('projects_title_en', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока проектов')),
                ('projects_title_fr', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока проектов')),
                ('projects_subtitle', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока проектов')),
                ('projects_subtitle_ru', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока проектов')),
                ('projects_subtitle_en', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока проектов')),
                ('projects_subtitle_fr', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока проектов')),
                ('projects_button', models.CharField(blank=True, max_length=30, null=True, verbose_name='Текст кнопки блока проектов')),
                ('projects_button_ru', models.CharField(blank=True, max_length=30, null=True, verbose_name='Текст кнопки блока проектов')),
                ('projects_button_en', models.CharField(blank=True, max_length=30, null=True, verbose_name='Текст кнопки блока проектов')),
                ('projects_button_fr', models.CharField(blank=True, max_length=30, null=True, verbose_name='Текст кнопки блока проектов')),
                ('questions_title', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок блока "Есть вопросы?"')),
                ('questions_title_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок блока "Есть вопросы?"')),
                ('questions_title_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок блока "Есть вопросы?"')),
                ('questions_title_fr', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок блока "Есть вопросы?"')),
                ('questions_subtitle', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Есть вопросы?"')),
                ('questions_subtitle_ru', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Есть вопросы?"')),
                ('questions_subtitle_en', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Есть вопросы?"')),
                ('questions_subtitle_fr', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Есть вопросы?"')),
                ('how_we_work_title', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_title_ru', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_title_en', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_title_fr', models.CharField(blank=True, max_length=100, null=True, verbose_name='Заголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_subtitle', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_subtitle_ru', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_subtitle_en', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_subtitle_fr', models.TextField(blank=True, null=True, verbose_name='Подзаголовок блока "Как мы работаем с клиентами"')),
                ('how_we_work_image', models.ImageField(blank=True, max_length=255, null=True, upload_to='about', verbose_name='Фото в блоке  блока "Как мы работаем с клиентами"')),
            ],
            options={
                'verbose_name': 'Главная страница',
            },
        ),
    ]
