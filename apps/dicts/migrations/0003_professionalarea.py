# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-08 20:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dicts', '0002_delete_siteconfiguration'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProfessionalArea',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('title', models.CharField(db_index=True, max_length=255, unique=True, verbose_name='Название')),
                ('title_ru', models.CharField(db_index=True, max_length=255, null=True, unique=True, verbose_name='Название')),
                ('title_en', models.CharField(db_index=True, max_length=255, null=True, unique=True, verbose_name='Название')),
                ('title_fr', models.CharField(db_index=True, max_length=255, null=True, unique=True, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Направление деятельности',
                'verbose_name_plural': 'Направления деятельности',
            },
        ),
    ]
