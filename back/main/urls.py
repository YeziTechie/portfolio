from django.urls import path
from main.views import LanguageView, PersianView, EnglishView

urlpatterns = [
	path('', LanguageView.as_view(), name='index'),
	path('', PersianView.as_view(), name='persian_portfolio'),
	path('', EnglishView.as_view(), name='english_portfolio'),
]