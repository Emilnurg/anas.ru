# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-14 08:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0004_auto_20170512_1045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactspage',
            name='map_x',
            field=models.FloatField(blank=True, default=0.0, verbose_name='Координата X (долгота)'),
        ),
        migrations.AlterField(
            model_name='contactspage',
            name='map_x_en',
            field=models.FloatField(blank=True, default=0.0, null=True, verbose_name='Координата X (долгота)'),
        ),
        migrations.AlterField(
            model_name='contactspage',
            name='map_x_fr',
            field=models.FloatField(blank=True, default=0.0, null=True, verbose_name='Координата X (долгота)'),
        ),
        migrations.AlterField(
            model_name='contactspage',
            name='map_x_ru',
            field=models.FloatField(blank=True, default=0.0, null=True, verbose_name='Координата X (долгота)'),
        ),
        migrations.AlterField(
            model_name='contactspage',
            name='map_y',
            field=models.FloatField(blank=True, default=0.0, verbose_name='Координата Y (широта)'),
        ),
        migrations.AlterField(
            model_name='contactspage',
            name='map_y_en',
            field=models.FloatField(blank=True, default=0.0, null=True, verbose_name='Координата Y (широта)'),
        ),
        migrations.AlterField(
            model_name='contactspage',
            name='map_y_fr',
            field=models.FloatField(blank=True, default=0.0, null=True, verbose_name='Координата Y (широта)'),
        ),
        migrations.AlterField(
            model_name='contactspage',
            name='map_y_ru',
            field=models.FloatField(blank=True, default=0.0, null=True, verbose_name='Координата Y (широта)'),
        ),
    ]
