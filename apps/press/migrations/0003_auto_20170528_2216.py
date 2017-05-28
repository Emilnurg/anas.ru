# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-28 19:16
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('press', '0002_auto_20170528_1624'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='newssection',
            options={'verbose_name': 'Секция новости', 'verbose_name_plural': 'Секция новости'},
        ),
        migrations.RemoveField(
            model_name='news',
            name='related_news',
        ),
        migrations.AlterField(
            model_name='newssection',
            name='gallery',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Gallery', verbose_name='Галерея фотографий'),
        ),
    ]
