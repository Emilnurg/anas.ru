# -*- coding: utf-8 -*-


def get_field(instance, field):
    """Позволяет обращаться ко вложенным атрибутам
    объекта на подобие getattr, атрибуты разделяются точкой.
    Пример вызова: get_field(point, 'city.region.name')
    """
    field_path = field.split('.')
    attr = instance

    for elem in field_path:
        try:
            attr = getattr(attr, elem)
        except AttributeError:
            return None
    return attr
