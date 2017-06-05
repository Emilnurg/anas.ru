# -*- coding: utf-8 -*-
from django.core.paginator import InvalidPage, EmptyPage
from django.urls import reverse

from pure_pagination import Paginator

from catalog.models import Product
from knowledge.models import Article
from search import PRODUCTS_PER_PAGE, COURSES_PER_PAGE, ARTICLES_PER_PAGE
from search.indexes.articles import search_articles
from search.indexes.courses import search_courses
from search.indexes.products import search_products
from snippets.views import BaseTemplateView
from training.models import Course


class SearchIndexView(BaseTemplateView):
    """Главная страница поиска"""
    template_name = 'search/search_index.html'

    def get_context_data(self, **kwargs):
        kwargs = super(SearchIndexView, self).get_context_data(**kwargs)
        request = kwargs['view'].request
        page = self.get_page()
        query = request.GET.get('q', '')
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

        get_params = '?' + '&'.join(['%s=%s' % (k, v) for k, v in get_params.items()])
        kwargs.update(
            base_url=reverse('search:search', kwargs={'lang': kwargs.get('lang')}),
            get_params=get_params,
            page=page,
            q=query
        )

        return kwargs
