# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-06 15:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DbConfig',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('key', models.CharField(db_index=True, max_length=250, unique=True, verbose_name='Ключ')),
                ('verbose_title', models.CharField(max_length=250, verbose_name='Что означает')),
                ('value', models.TextField(blank=True, verbose_name='Значение')),
                ('value_ru', models.TextField(blank=True, null=True, verbose_name='Значение')),
                ('value_en', models.TextField(blank=True, null=True, verbose_name='Значение')),
                ('value_fr', models.TextField(blank=True, null=True, verbose_name='Значение')),
            ],
            options={
                'verbose_name': 'Переменная',
                'verbose_name_plural': 'Переменные шаблонов',
            },
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('slug', models.SlugField(unique=True, verbose_name='Алиас')),
                ('comment', models.TextField(blank=True, null=True, verbose_name='Комментарий')),
            ],
            options={
                'verbose_name': 'Меню',
                'verbose_name_plural': 'Меню',
            },
        ),
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('li_class_name', models.CharField(blank=True, max_length=50, null=True, verbose_name='CSS-класс (li тэг)')),
                ('a_class_name', models.CharField(blank=True, max_length=50, null=True, verbose_name='CSS-класс for link (a тэг)')),
                ('url', models.CharField(max_length=255, verbose_name='Ссылка')),
                ('url_ru', models.CharField(max_length=255, null=True, verbose_name='Ссылка')),
                ('url_en', models.CharField(max_length=255, null=True, verbose_name='Ссылка')),
                ('url_fr', models.CharField(max_length=255, null=True, verbose_name='Ссылка')),
                ('title', models.CharField(blank=True, max_length=255, verbose_name='Заголовок')),
                ('title_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок')),
                ('title_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок')),
                ('title_fr', models.CharField(blank=True, max_length=255, null=True, verbose_name='Заголовок')),
                ('alt', models.CharField(blank=True, max_length=255, null=True, verbose_name='Текст при наведении')),
                ('alt_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Текст при наведении')),
                ('alt_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Текст при наведении')),
                ('alt_fr', models.CharField(blank=True, max_length=255, null=True, verbose_name='Текст при наведении')),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items', to='general.Menu', verbose_name='Меню')),
                ('parent_item', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='children', to='general.MenuItem', verbose_name='Родительский пункт меню')),
            ],
            options={
                'verbose_name': 'Пункт меню',
                'verbose_name_plural': 'Пункты меню',
            },
        ),
    ]
