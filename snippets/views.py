from django.views import View
from django.views.generic import TemplateView


class BaseTemplateView(TemplateView):
    template_name = None
    template_engine = 'jinja2'
    content_type = 'text/html'


class BaseView(View):
    pass
