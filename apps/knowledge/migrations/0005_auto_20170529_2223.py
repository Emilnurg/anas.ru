# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-29 19:23
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('knowledge', '0004_auto_20170529_0040'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='body',
        ),
        migrations.RemoveField(
            model_name='article',
            name='body_en',
        ),
        migrations.RemoveField(
            model_name='article',
            name='body_fr',
        ),
        migrations.RemoveField(
            model_name='article',
            name='body_ru',
        ),
    ]