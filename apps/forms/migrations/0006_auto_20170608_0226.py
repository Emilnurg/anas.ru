# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-07 23:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0005_auto_20170608_0114'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PartnershipFormRequest',
        ),
        migrations.AddField(
            model_name='callbackformrequest',
            name='place',
            field=models.CharField(blank=True, choices=[('about', 'О компании'), ('popup', 'Попап')], max_length=50, null=True, verbose_name='Расположение формы'),
        ),
    ]
