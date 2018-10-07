from __future__ import unicode_literals
from django.utils import timezone
from django.db import models
from django.forms import TextInput, Textarea

categories_list = (
    ('aerial', 'Aerial'),
    ('architecture', 'Architecture'),
    ('landscape', 'Landscape'),
    ('macro', 'Macro'),
    ('panorama', 'Panorama'),
    ('portrait', 'Portrait'),
    ('sports', 'Sports'),
    ('street', 'Street'),
    ('wildlife', 'Wildlife'),
)
class Photo(models.Model):
    categories_list = models.CharField(max_length=14, choices=categories_list, default='')
    name = models.CharField(max_length=254, default='')    
    image = models.ImageField(upload_to='images', default='images/default.jpg', blank=True, null=True)
    description = models.TextField()
    published_date = models.DateTimeField(blank=True, null=True)


    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.name