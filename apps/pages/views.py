# -*- coding: utf-8 -*-
from pages import models
from snippets.views import BaseTemplateView


class ContactsView(BaseTemplateView):
    """Страница контактов"""
    template_name = 'pages/contacts.html'

    @staticmethod
    def get_context_data(**kwargs):
        return {
            'current_page': models.ContactsPage.get_solo()
        }
