# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-07-03 15:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0009_auto_20170608_2103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedbackformrequest',
            name='place',
            field=models.CharField(blank=True, choices=[('home', 'Главная'), ('contacts', 'Контакты'), ('partners', 'Партнеры')], max_length=50, null=True, verbose_name='Расположение формы'),
        ),
    ]
