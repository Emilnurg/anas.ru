# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-07 21:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0003_auto_20170525_0158'),
    ]

    operations = [
        migrations.CreateModel(
            name='CallbackFormRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('language', models.CharField(choices=[('ru', 'Русский'), ('en', 'English'), ('fr', 'Français')], default='ru', max_length=6, verbose_name='Язык')),
                ('read_status', models.SmallIntegerField(choices=[(-1, 'Новый'), (1, 'Прочитан')], default=-1, verbose_name='Статус прочтения')),
                ('name', models.CharField(max_length=255, verbose_name='Имя')),
                ('telephone', models.CharField(max_length=100, verbose_name='Телефон')),
            ],
            options={
                'verbose_name': 'Заказ звонка',
                'verbose_name_plural': 'Заказы звонка',
            },
        ),
        migrations.AlterField(
            model_name='feedbackformrequest',
            name='comment',
            field=models.TextField(max_length=32768, verbose_name='Вопрос'),
        ),
    ]
