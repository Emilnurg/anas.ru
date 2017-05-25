# -*- coding: utf-8 -*-
# flake8: noqa
# Generated by Django 1.11 on 2017-05-25 09:30
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_auto_20170512_0933'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productcategory',
            name='image',
        ),
        migrations.RemoveField(
            model_name='productcategory',
            name='image_position',
        ),
        migrations.AddField(
            model_name='product',
            name='block_shape',
            field=models.CharField(choices=[('normal', 'Нормальная'), ('high', 'Высокая')], default='normal', max_length=30, verbose_name='Форма блока'),
        ),
        migrations.AddField(
            model_name='product',
            name='docs_body',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, verbose_name='Контент вкладки "Документация"'),
        ),
        migrations.AddField(
            model_name='product',
            name='docs_body_en',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Документация"'),
        ),
        migrations.AddField(
            model_name='product',
            name='docs_body_fr',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Документация"'),
        ),
        migrations.AddField(
            model_name='product',
            name='docs_body_ru',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Документация"'),
        ),
        migrations.AddField(
            model_name='product',
            name='image_position',
            field=models.CharField(choices=[('left', 'Слева'), ('center', 'Посередине'), ('right', 'Снизу справа')], default='center', max_length=30, verbose_name='Расположение изображения'),
        ),
        migrations.AddField(
            model_name='product',
            name='product_set',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='set_components', to='catalog.Product', verbose_name='Входит в комплект'),
        ),
        migrations.AddField(
            model_name='product',
            name='testing_body',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, verbose_name='Контент вкладки "Тестирование"'),
        ),
        migrations.AddField(
            model_name='product',
            name='testing_body_en',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Тестирование"'),
        ),
        migrations.AddField(
            model_name='product',
            name='testing_body_fr',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Тестирование"'),
        ),
        migrations.AddField(
            model_name='product',
            name='testing_body_ru',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Тестирование"'),
        ),
        migrations.AddField(
            model_name='product',
            name='training_body',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, verbose_name='Контент вкладки "Обучение"'),
        ),
        migrations.AddField(
            model_name='product',
            name='training_body_en',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Обучение"'),
        ),
        migrations.AddField(
            model_name='product',
            name='training_body_fr',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Обучение"'),
        ),
        migrations.AddField(
            model_name='product',
            name='training_body_ru',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Обучение"'),
        ),
        migrations.AlterField(
            model_name='product',
            name='features_body',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, verbose_name='Контент вкладки "Характеристики"'),
        ),
        migrations.AlterField(
            model_name='product',
            name='features_body_en',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Характеристики"'),
        ),
        migrations.AlterField(
            model_name='product',
            name='features_body_fr',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Характеристики"'),
        ),
        migrations.AlterField(
            model_name='product',
            name='features_body_ru',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Контент вкладки "Характеристики"'),
        ),
        migrations.AlterField(
            model_name='product',
            name='manufacturer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='products', to='catalog.Manufacturer', verbose_name='Производитель'),
        ),
    ]