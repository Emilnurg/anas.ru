# -*- coding: utf-8 -*-
from collections import OrderedDict

from snippets.models import BaseEnumerate


class IconEnum(BaseEnumerate):
    """Перечисление медицинских иконок"""
    ANTIBIOTIC = 'antibiotic'
    BACTERIA = 'bacteria'
    BRACES = 'braces'
    CARDIOGRAM = 'cardiogram'
    DENTAL_DRILL = 'dental-drill'
    ELECTRIC_TOOTHBRUSH = 'electric-toothbrush'
    IMPLANTS = 'implants'
    MEDICAL_RECORDS = 'medical-records'
    MIRROR = 'mirror'
    MOLAR = 'molar'
    MOLAR_1 = 'molar-1'
    MOLAR_2 = 'molar-2'
    MOLAR_CROWN = 'molar-crown'
    PERIODONTAL_SCALER = 'periodontal-scaler'
    PREMOLAR = 'premolar'
    RECORDS = 'records'
    RECORDS_1 = 'records-1'
    SEARCH = 'search'
    TEETH = 'teeth'
    TOOTH = 'tooth'
    TOOTH_1 = 'tooth-1'
    TWEEZERS = 'tweezers'
    VIRUS = 'virus'
    X_RAY = 'x-ray'

    values = OrderedDict((
        (ANTIBIOTIC, 'antibiotic'),
        (BACTERIA, 'bacteria'),
        (BRACES, 'braces'),
        (CARDIOGRAM, 'cardiogram'),
        (DENTAL_DRILL, 'dental-drill'),
        (ELECTRIC_TOOTHBRUSH, 'electric-toothbrush'),
        (IMPLANTS, 'implants'),
        (MEDICAL_RECORDS, 'medical-records'),
        (MIRROR, 'mirror'),
        (MOLAR, 'molar'),
        (MOLAR_1, 'molar-1'),
        (MOLAR_2, 'molar-2'),
        (MOLAR_CROWN, 'molar-crown'),
        (PERIODONTAL_SCALER, 'periodontal-scaler'),
        (PREMOLAR, 'premolar'),
        (RECORDS, 'records'),
        (RECORDS_1, 'records-1'),
        (SEARCH, 'search'),
        (TEETH, 'teeth'),
        (TOOTH, 'tooth'),
        (TOOTH_1, 'tooth-1'),
        (TWEEZERS, 'tweezers'),
        (VIRUS, 'virus'),
        (X_RAY, 'x-ray')
    ))


class TextAlignEnum(BaseEnumerate):
    LEFT = 'left'
    CENTER = 'center'
    RIGHT = 'right'
    JUSTIFY = 'justify'

    values = OrderedDict((
        (LEFT, 'left'),
        (CENTER, 'center'),
        (RIGHT, 'right'),
        (JUSTIFY, 'justify')
    ))
