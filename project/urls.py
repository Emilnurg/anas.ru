# -*- coding: utf-8 -*-
from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.static import serve

admin.autodiscover()

handler400 = 'snippets.basics.views.e400'
handler403 = 'snippets.basics.views.e403'
handler404 = 'snippets.basics.views.e404'
handler500 = 'snippets.basics.views.e500'

urlpatterns = (
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('press.urls', namespace='press')),
)

if settings.DEBUG is True:
    urlpatterns += (
        url(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    )

if getattr(settings, 'ENV', 'production') == 'dev':
    urlpatterns += tuple(staticfiles_urlpatterns())

urlpatterns += (
    url(r'^', include('core.urls', namespace='core')),
)
