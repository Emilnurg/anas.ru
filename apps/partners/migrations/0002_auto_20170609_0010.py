# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-08 21:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dicts', '0004_delete_socialnetwork'),
        ('partners', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='partner',
            name='professional_area',
        ),
        migrations.AddField(
            model_name='partner',
            name='professional_areas',
            field=models.ManyToManyField(blank=True, related_name='partners', to='dicts.ProfessionalArea', verbose_name='Направления деятельности'),
        ),
    ]
