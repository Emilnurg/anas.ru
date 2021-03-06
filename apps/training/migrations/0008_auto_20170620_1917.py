# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.10.7 on 2017-06-20 16:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('training', '0007_auto_20170531_2225'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseAboutBlock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='Создано')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Обновлено')),
                ('ordering', models.IntegerField(db_index=True, default=0, verbose_name='Порядок')),
                ('status', models.SmallIntegerField(choices=[(0, 'Черновик'), (1, 'Публичный'), (2, 'Скрытый')], default=1, verbose_name='Статус')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок слева')),
                ('title_ru', models.CharField(max_length=255, null=True, verbose_name='Заголовок слева')),
                ('title_en', models.CharField(max_length=255, null=True, verbose_name='Заголовок слева')),
                ('title_fr', models.CharField(max_length=255, null=True, verbose_name='Заголовок слева')),
                ('description', models.TextField(blank=True, null=True, verbose_name='Описание справа')),
                ('description_ru', models.TextField(blank=True, null=True, verbose_name='Описание справа')),
                ('description_en', models.TextField(blank=True, null=True, verbose_name='Описание справа')),
                ('description_fr', models.TextField(blank=True, null=True, verbose_name='Описание справа')),
            ],
            options={
                'verbose_name_plural': 'Блоки описания о курсе',
                'verbose_name': 'Блок описания о курсе',
            },
        ),
        migrations.AddField(
            model_name='course',
            name='is_enroll_button',
            field=models.BooleanField(default=True, verbose_name='Выводить кнопку "Записаться"'),
        ),
        migrations.AlterField(
            model_name='courseteacher',
            name='teacher_role',
            field=models.TextField(blank=True, help_text='Например, "лектор"', null=True, verbose_name='Роль преподавателя'),
        ),
        migrations.AlterField(
            model_name='courseteacher',
            name='teacher_role_en',
            field=models.TextField(blank=True, help_text='Например, "лектор"', null=True, verbose_name='Роль преподавателя'),
        ),
        migrations.AlterField(
            model_name='courseteacher',
            name='teacher_role_fr',
            field=models.TextField(blank=True, help_text='Например, "лектор"', null=True, verbose_name='Роль преподавателя'),
        ),
        migrations.AlterField(
            model_name='courseteacher',
            name='teacher_role_ru',
            field=models.TextField(blank=True, help_text='Например, "лектор"', null=True, verbose_name='Роль преподавателя'),
        ),
        migrations.AddField(
            model_name='courseaboutblock',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='about_blocks', to='training.Course', verbose_name='Курс'),
        ),
    ]
