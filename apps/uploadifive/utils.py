# -*- coding: utf-8 -*-
from os import path
from uuid import uuid4


def upload_path_generator(instance, filename, base_path='uploader'):
    """Генератор пути к файлу загрузки"""
    extension = filename.split('.')[-1].lower() or 'txt'
    uid = str(uuid4())
    # разбиваем на мелкие подпапки
    processed_filename = '%s/%s.%s' % (uid[:2], uid[2:], extension)
    return path.join(base_path, processed_filename)
