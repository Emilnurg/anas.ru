# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-29 19:23
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0003_auto_20170529_0040'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='body',
        ),
        migrations.RemoveField(
            model_name='course',
            name='body_en',
        ),
        migrations.RemoveField(
            model_name='course',
            name='body_fr',
        ),
        migrations.RemoveField(
            model_name='course',
            name='body_ru',
        ),
    ]