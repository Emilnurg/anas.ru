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
    url(r'^', include('catalog.urls', namespace='catalog')),
    url(r'^', include('education.urls', namespace='education')),
    url(r'^', include('forms.urls', namespace='forms')),
    url(r'^', include('knowledge.urls', namespace='knowledge')),
    url(r'^', include('pages.urls', namespace='pages')),
    url(r'^', include('press.urls', namespace='press')),
    url(r'^', include('projects.urls', namespace='projects')),
    url(r'^', include('search.urls', namespace='search')),
    url(r'^', include('seo.urls', namespace='seo'))
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
