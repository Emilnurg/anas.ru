# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-09-06 15:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20170906_1548'),
    ]

    operations = [
        migrations.AddField(
            model_name='homecatalog',
            name='bg',
            field=models.CharField(blank=True, choices=[('blue', 'Голубой'), ('pink', 'Розовый')], max_length=100, null=True, verbose_name='Фон'),
        ),
    ]
