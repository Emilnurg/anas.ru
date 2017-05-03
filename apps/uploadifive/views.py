# -*- coding: utf-8 -*-
from mimetypes import guess_type

from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.utils.translation import ugettext as _
from django.views.decorators.csrf import csrf_exempt

from PIL import Image

from snippets.views import BaseView
from uploadifive.db import NonceException
from uploadifive.jinjaglobals import nonce
from uploadifive.models import Nonce, Upload


class NonceView(BaseView):
    """Представление токена для загрузки"""
    @staticmethod
    def get(request):
        prefix = request.GET.get('prefix', '')
        return HttpResponse(nonce(request, prefix))


class UploadView(BaseView):
    @classmethod
    def as_view(cls, **initkwargs):
        view = super(UploadView, cls).as_view(**initkwargs)
        return csrf_exempt(view)

    @staticmethod
    def process_image_upload(data):
        mimetype = guess_type(data.name)[0]
        if mimetype not in settings.UPLOADIFIVE_IMAGE_MIMETYPES:
            return None, _('Файл должен быть в формате изображения.')
        else:
            try:
                img = Image.open(data)
                img.load()
            except Exception:
                return None, _('Произошла ошибка при попытке открыть изображение.')
            data.seek(0)
        return data, None

    # @staticmethod
    # def process_video_upload(data):
    #     mimetype = guess_type(data.name)[0]
    #     if mimetype not in settings.UPLOADIFIVE_VIDEO_MIMETYPES:
    #         return None, _('Файл должно быть в формате видео.')
    #     return data, None
    #
    # @staticmethod
    # def process_generic_upload(data):
    #     mimetype = guess_type(data.name)[0]
    #     if mimetype not in settings.UPLOADIFIVE_GENERIC_MIMETYPES:
    #         return None, _('Файл имеет неразрешенный тип.')
    #     return data, None

    def post(self, request, upload_type=''):
        nonce_key = request.POST.get('nonce', None)

        try:
            nonce_obj = Nonce.objects.lookup(nonce_key)
        except NonceException as e:
            response = JsonResponse({
                'status': 'error',
                'message': str(e)
            })
            response.status_code = 200
        else:
            data = request.FILES['Filedata']
            processor = getattr(
                self, 'process_%s_upload' % (upload_type if upload_type else 'generic')
            )
            data, error = processor(data)

            if error:
                response = JsonResponse({
                    'status': 'error',
                    'message': error
                })
                response.status_code = 200
            else:
                if not nonce_obj.pk:
                    nonce_obj.save()

                upload = Upload(filename=data.name, filetype=upload_type)
                upload.data = data
                upload.filetype = upload_type
                upload.user_id = nonce_obj.user_id
                upload.save()

                response = JsonResponse({
                    'status': 'ok',
                    'url': upload.data.url
                })

        return response
