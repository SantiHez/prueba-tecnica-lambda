from django.urls import path
from .views import UserProfileRegisterView, CustomLoginView

urlpatterns = [
    path('register/', UserProfileRegisterView.as_view(), name='register'),
    path('login/', CustomLoginView.as_view(), name='login'),
]
