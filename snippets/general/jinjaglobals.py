# -*- coding: utf-8 -*-
from markupsafe import escape

from snippets.general.models import Menu
from snippets.template_backends.jinja2 import jinjaglobal


@jinjaglobal
def menu(request, menu_slug, li=True, li_classes=None, link_classes=None, target_blank=False,
         icon=False, active_class='active'):
    try:
        menu_obj = Menu.objects.published().get(slug=menu_slug)
    except Menu.DoesNotExist:
        return ''

    items = menu_obj.items.published()
    result = ''
    active_url = request.path_info
    if getattr(request, 'active_url', None):
        active_url = request.active_url

    for item in items:
        classes = escape(link_classes) if link_classes else ''
        if item.url == active_url:
            classes += ' ' + active_class

        link = '<a href="{link}"{classes}{target_blank}{title}>{icon}{caption}</a>'.format(
            link=escape(item.url),
            classes=(' class="%s"' % classes) if classes else '',
            target_blank=' target="_blank"' if target_blank else '',
            title=(' title="%s"' % item.alt) if item.alt else '',
            icon=('<i class="%s"></i>' % item.class_name) if icon and item.class_name else '',
            caption=item.title
        )

        if li:
            classes = li_classes if li_classes else ''
            if not icon and item.class_name:
                classes += ' ' + item.class_name
            link = '<li{classes}>{link}</li>'.format(
                classes=(' class="%s"' % classes) if classes else '',
                link=link
            )

        result += link
    return result
