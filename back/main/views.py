from django.views import View
from django.urls import reverse
from django.shortcuts import get_object_or_404, render, redirect


class LanguageView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'language.html')

class PersianView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index-pe.html')
    
class EnglishView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')
