from django.conf.urls import url
from .views import photo
from .import views


urlpatterns = [
    url(r'^$', photo, name='photo'),

]