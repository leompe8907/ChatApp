from django.urls import path
from .views import get_user_list

urlpatterns = [
    path("user/", get_user_list, name="user"),
]
