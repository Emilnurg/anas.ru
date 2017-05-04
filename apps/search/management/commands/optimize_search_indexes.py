# coding: utf-8
from django.core.management.base import BaseCommand

from search.utils import optimizees

__author__ = 'wizzzet'


class Command(BaseCommand):
    def handle(self, **options):
        optimizees()
