# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-11-26 09:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0002_auto_20181103_2034'),
    ]

    operations = [
        migrations.AddField(
            model_name='photo',
            name='format_list',
            field=models.CharField(choices=[('16x9', 'Lanscape Mode'), ('4x3', 'Portrait Mode'), ('32x9', 'Panorama')], default='', max_length=14),
        ),
    ]
