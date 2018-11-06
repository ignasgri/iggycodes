# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-11-03 20:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='categories_list',
            field=models.CharField(choices=[('aerial', 'Aerial'), ('architecture', 'Architecture'), ('landscape', 'Landscape'), ('macro', 'Macro'), ('panorama', 'Panorama'), ('portrait', 'Portrait'), ('sports', 'Sports'), ('street', 'Street'), ('wildlife', 'Wildlife')], default='', max_length=14),
        ),
    ]
