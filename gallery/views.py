from django.shortcuts import render, get_list_or_404
from .models import Photo
from rest_framework import viewsets
from django.utils import timezone
# from .serializers import PhotoSerializer
from django.template.context_processors import csrf
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger


# Create your views here.
def gallery(request):
    photo = Photo.objects.filter(published_date__lte=timezone.now()
        ).order_by('-published_date')[0:999]
    paginator = Paginator(photo, 8)
    page = request.GET.get('page')
    try:
        photo = paginator.page(page)
    except PageNotAnInteger:
        photo = paginator.page(1)
    except EmptyPage:
        prhoto = paginator.page(paginator.num_pages)
    args = {}
    args.update(csrf(request))
    return render(request, "gallery.html", {"photo": photo}, args)


class PhotoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Photo.objects.all()
    # serializer_class = PhotoSerializer