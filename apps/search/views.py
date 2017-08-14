# -*- coding: utf-8 -*-
import re

from django.core.paginator import InvalidPage, EmptyPage
from django.db.models import Q
from django.urls import reverse

from pure_pagination import Paginator

from catalog.models import Product
from core.models import Page
from knowledge.models import Article
from pages.models import AboutPage, ContactsPage, PartnersPage, ServiceCenterPage
from search import PRODUCTS_PER_PAGE, COURSES_PER_PAGE, ARTICLES_PER_PAGE
from search.indexes.articles import search_articles
from search.indexes.courses import search_courses
from search.indexes.products import search_products
from search.utils import get_stop_words
from snippets.views import BaseTemplateView
from training.models import Course


class SearchIndexView(BaseTemplateView):
    """Главная страница поиска"""
    template_name = 'search/search_index.html'

    def get_context_data(self, **kwargs):
        kwargs = super(SearchIndexView, self).get_context_data(**kwargs)
        request = kwargs['view'].request
        page = self.get_page()
        source_query = request.GET.get('q', '')
        stop_words = get_stop_words()
        query = ' '.join(filter(lambda x: x not in stop_words, re.split('\s+', source_query)))
        section = request.GET.get('s', 'products')
        get_params = {'q': query}

        mapping = [{
            'caption': 'articles',
            'search_func': search_articles,
            'qs': Article.objects.published()
            .order_by('ordering', '-publish_date'),
            'per_page': ARTICLES_PER_PAGE
        }, {
            'caption': 'products',
            'search_func': search_products,
            'qs': Product.objects.published()
            .select_related('manufacturer')
            .order_by('ordering', 'title'),
            'per_page': PRODUCTS_PER_PAGE
        }, {
            'caption': 'training',
            'search_func': search_courses,
            'qs': Course.objects.published()
            .order_by('ordering', 'title'),
            'per_page': COURSES_PER_PAGE
        }]

        for config in mapping:
            section_page = 1

            # только в текущем разделе наращиваем пагинацию
            if config['caption'] == section:
                section_page = page

            found_ids, objects = [], []

            if query:
                found_objects = config['search_func'](
                    query, {
                        'query': query,
                        'order_by': ('_score', 'ordering')
                    }
                )

                try:
                    found_ids = [int(x['_id']) for x in found_objects['hits']['hits']]
                except (KeyError, IndexError):
                    pass

            paginator_page = None
            paginator = Paginator(found_ids, config['per_page'], allow_empty_first_page=False)
            try:
                paginator_page = paginator.page(section_page)
                found_ids = paginator_page.object_list
            except (EmptyPage, InvalidPage):
                found_ids = []

            if found_ids:
                objects = config['qs'].filter(id__in=found_ids)
                objects_dict = {o.pk: o for o in objects}
                # восстановим порядок
                objects = [objects_dict[x] for x in found_ids if x in objects_dict]

            kwargs.update({
                config['caption']: {
                    'objects': objects,
                    'paginator_page': paginator_page
                }
            })

        pages = []
        if query:
            flatpages = Page.objects.published()\
                .filter(Q(title__icontains=query) | Q(body__icontains=query))

            if flatpages:
                pages.extend(flatpages)

            about_page = AboutPage.objects.filter(
                Q(title__icontains=query)
                | Q(subtitle__icontains=query)
                | Q(quote__icontains=query)
                | Q(quoted_person__icontains=query)
                | Q(main_body__icontains=query)
                | Q(guarantee_title__icontains=query)
                | Q(guarantee_body__icontains=query)
                | Q(questions_title__icontains=query)
                | Q(questions_subtitle__icontains=query)
            )

            if about_page:
                pages.extend(about_page)

            contacts_page = ContactsPage.objects.filter(
                Q(title__icontains=query)
                | Q(address__icontains=query)
                | Q(questions_title__icontains=query)
                | Q(questions_subtitle__icontains=query)
            )

            if contacts_page:
                pages.extend(contacts_page)

            partners_page = PartnersPage.objects.filter(
                Q(title__icontains=query)
                | Q(subtitle__icontains=query)
                | Q(howto_title__icontains=query)
                | Q(howto_subtitle__icontains=query)
                | Q(howto_body__icontains=query)
                | Q(howto_button_caption__icontains=query)
                | Q(questions_title_left__icontains=query)
                | Q(questions_title__icontains=query)
                | Q(questions_subtitle__icontains=query)
            )

            if partners_page:
                pages.extend(partners_page)

            service_center_page = ServiceCenterPage.objects.filter(
                Q(title__icontains=query)
                | Q(subtitle__icontains=query)
                | Q(body__icontains=query)
                | Q(request_order_title__icontains=query)
                | Q(questions_title__icontains=query)
                | Q(questions_subtitle__icontains=query)
            )

            if service_center_page:
                pages.extend(service_center_page)

        get_params = '?' + '&'.join(['%s=%s' % (k, v) for k, v in get_params.items()])
        kwargs.update(
            base_url=reverse('search:search', kwargs={'lang': kwargs.get('lang')}),
            get_params=get_params,
            page=page,
            pages=pages,
            q=source_query
        )

        return kwargs
