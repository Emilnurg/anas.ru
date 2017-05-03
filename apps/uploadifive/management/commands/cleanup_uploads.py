# -*- coding: utf-8 -*-
from datetime import timedelta, datetime

from django.core.management import BaseCommand

from uploadifive import NONCE_MAX_AGE
from uploadifive.models import Nonce, Upload

# min 3 hours
OLD_NONCE_DELETE_PERIOD = max(NONCE_MAX_AGE / 3600, 6)  # hours
OLD_UPLOADS_DELETE_PERIOD = 30  # days


class Command(BaseCommand):
    def handle(self, **options):
        end_date = datetime.now() - timedelta(hours=OLD_NONCE_DELETE_PERIOD)
        nonces = Nonce.objects.filter(updated__lt=end_date)
        cnt = nonces.count()
        nonces.delete()
        print('%s nonces were deleted.' % cnt)

        end_date = datetime.now() - timedelta(days=OLD_UPLOADS_DELETE_PERIOD)
        uploads = Upload.objects.filter(updated__lt=end_date, obtained=False)
        cnt = uploads.count()
        uploads.delete()
        print('%s not obtained uploads were deleted.' % cnt)
