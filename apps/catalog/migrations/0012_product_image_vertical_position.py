# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-09-18 21:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0011_auto_20170727_1922'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image_vertical_position',
            field=models.CharField(choices=[('middle', 'По центру'), ('bottom', 'По нижнему краю'), ('padding_bottom', 'По нижнему краю с отступом')], default='bottom', max_length=30, verbose_name='Вертикальное позиционирование изображения'),
        ),
    ]
