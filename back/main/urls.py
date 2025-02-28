from django.urls import path
from main.views import LanguageView

urlpatterns = [
	path('', LanguageView.as_view(), name='index'),
]