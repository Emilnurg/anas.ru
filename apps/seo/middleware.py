# -*- coding: utf-8 -*-
from django.http import HttpResponseGone, HttpResponsePermanentRedirect,\
    HttpResponseRedirect, HttpResponseNotModified
from django.conf import settings
from django.http.response import HttpResponseRedirectBase

from seo.enums import RedirectCodes
from seo.models import SEOPage
from seo.router import router


class SEOMiddleware(object):
    """Middleware adds some template context variables"""
    @staticmethod
    def process_request(request):
        path = request.get_full_path()
        if not path.endswith('/') and settings.APPEND_SLASH:
            path += '/'
        redirect = router.get_path(path)
        if redirect is not None:
            http_code = int(redirect.http_code)
            if redirect.new_path == '' or http_code == RedirectCodes.C410:
                return HttpResponseGone()
            elif http_code == RedirectCodes.C301:
                return HttpResponsePermanentRedirect(redirect.new_path)
            elif http_code == RedirectCodes.C302:
                return HttpResponseRedirect(redirect.new_path)
            elif http_code == RedirectCodes.C304:
                return HttpResponseNotModified(redirect.new_path)
            response = HttpResponseRedirectBase(redirect.new_path)
            response.status_code = http_code
            return response

        try:
            seo_page = SEOPage.objects.published().get(url__iexact=request.get_full_path())
            seo_page.apply_seo_params(request)

        except (SEOPage.DoesNotExist, SEOPage.MultipleObjectsReturned):
            pass

        return None
