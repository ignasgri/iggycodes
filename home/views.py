from django.shortcuts import render
from contacts.forms import ContactsForm

# Create your views here.
def index(request):
    return render(request, "index.html", {
        'form': ContactsForm,
    })

def shop(request):
    return render(request, "shop.html")

def projects(request):
    return render(request, "projects.html")

def aboutme(request):
    return render(request, "aboutme.html")