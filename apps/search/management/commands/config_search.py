# coding: utf-8
from django.core.management.base import BaseCommand

from search.utils import elasticsearch_indexes_config

__author__ = 'wizzzet'


class Command(BaseCommand):
    def handle(self, **options):
        elasticsearch_indexes_config()
