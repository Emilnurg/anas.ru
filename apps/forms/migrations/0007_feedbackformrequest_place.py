# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-07 23:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0006_auto_20170608_0226'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedbackformrequest',
            name='place',
            field=models.CharField(blank=True, choices=[('hpme', 'Главная'), ('contacts', 'Контакты')], max_length=50, null=True, verbose_name='Расположение формы'),
        ),
    ]
