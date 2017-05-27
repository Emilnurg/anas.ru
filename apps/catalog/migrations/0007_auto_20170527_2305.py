# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-27 20:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0006_auto_20170527_1205'),
    ]

    operations = [
        migrations.AddField(
            model_name='productfeaturemain',
            name='value_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Значение'),
        ),
        migrations.AddField(
            model_name='productfeaturemain',
            name='value_fr',
            field=models.CharField(max_length=255, null=True, verbose_name='Значение'),
        ),
        migrations.AddField(
            model_name='productfeaturemain',
            name='value_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Значение'),
        ),
        migrations.AlterField(
            model_name='product',
            name='block_shape',
            field=models.CharField(choices=[('normal', 'Нормальная'), ('middle', 'Средняя'), ('high', 'Высокая')], default='normal', max_length=30, verbose_name='Форма блока'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image_position',
            field=models.CharField(choices=[('left', 'Слева'), ('center', 'Посередине'), ('right', 'Справа')], default='center', max_length=30, verbose_name='Расположение изображения'),
        ),
    ]
