# -*- coding: utf-8 -*-
from django.http.response import HttpResponse, HttpResponseRedirectBase

from snippets.slimmer import slimmer


class CompressMiddleware(object):
    """HTML compress middleware"""
    @staticmethod
    def process_response(request, response):
        if isinstance(response, HttpResponse) \
                and not isinstance(response, HttpResponseRedirectBase) \
                and response.get('Content-Type', None).find('text/html') == 0:
            response.content = slimmer.xhtml_slimmer(response.content)
        return response
