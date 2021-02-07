from .views import article_list, article_detail
from django.urls import path

urlpatterns = [
    path('', article_list, name='whole_list'),
    path('<int:pk>/', article_list, name='whole')
]
