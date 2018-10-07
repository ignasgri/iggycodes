from django.contrib import admin
from .models import Photo
from django.forms import TextInput
from django.db import models

# Register your models here.
class DisplayPhoto(admin.ModelAdmin):
    list_display = ('name', 'categories_list', 'published_date')
    # search_fields = ['name', 'brand']
    list_filter = ('name','categories_list')
    # list_editable = ['price', 'quantity']

    # formfield_overrides = {
    #     # Django enforces maximum field length of 14 onto 'title' field when user is editing in the change form
    #     models.DecimalField: {'widget': TextInput(attrs={'size':'5'})},
    #     }

admin.site.register(Photo, DisplayPhoto)