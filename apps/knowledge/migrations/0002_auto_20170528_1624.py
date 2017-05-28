# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-28 13:24
from __future__ import unicode_literals

from django.db import migrations
import image_cropping.fields


class Migration(migrations.Migration):

    dependencies = [
        ('knowledge', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='thumb_siblings',
            field=image_cropping.fields.ImageRatioField('image', '170x170', adapt_rotation=False, allow_fullsize=True, free_crop=True, help_text=None, hide_image_field=False, size_warning=False, verbose_name='Эскиз в навигации'),
        ),
        migrations.AlterField(
            model_name='article',
            name='thumb_list',
            field=image_cropping.fields.ImageRatioField('image', '580x720', adapt_rotation=False, allow_fullsize=True, free_crop=True, help_text=None, hide_image_field=False, size_warning=False, verbose_name='Эскиз в списке'),
        ),
    ]
