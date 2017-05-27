# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-27 20:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0008_auto_20170525_0158'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutadvantage',
            name='icon',
            field=models.CharField(blank=True, choices=[('antibiotic', 'Антибиотик'), ('bacteria', 'Бактерия'), ('braces', 'Брекеты'), ('dental-drill', 'Бормашина'), ('virus', 'Вирус'), ('medical-records', 'Врачебная запись'), ('records', 'Диагностика 1'), ('records-1', 'Диагностика 2'), ('mirror', 'Зеркало'), ('teeth', 'Зуб, пломба'), ('tooth', 'Зуб, блеск'), ('tooth-1', 'Зуб в разрезе'), ('dental-pin', 'Зубы и штифт'), ('implants', 'Имплант'), ('cardiogram', 'Кардиограмма'), ('molar-crown', 'Коронка'), ('molar', 'Коренной, бормашина'), ('molar-1', 'Коренной, крупно'), ('molar-2', 'Корренной, мелко, с десной'), ('premolar', 'Малый коренной'), ('tweezers', 'Пинцет'), ('search', 'Поиск, лупа'), ('x-ray', 'Рентген'), ('periodontal-scaler', 'Скалер'), ('electric-toothbrush', 'Электрическая зубная щетка')], max_length=50, null=True, verbose_name='Иконка'),
        ),
    ]
