# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-19 20:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0009_auto_20170528_0034'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='block_shape',
            field=models.CharField(choices=[('normal', 'Нормальная'), ('high', 'Высокая')], default='normal', max_length=30, verbose_name='Форма блока'),
        ),
    ]