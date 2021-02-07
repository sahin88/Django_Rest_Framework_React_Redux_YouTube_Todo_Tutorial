from django.urls import path, include
from .views import LoginView, LogoutView, registration
urlpatterns = [
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('registration/', registration)
]
