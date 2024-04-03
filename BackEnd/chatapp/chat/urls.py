from django.urls import path
from .consumers import PersonalChatConsumer

urlpatterns = [
    path('chat/', PersonalChatConsumer.as_asgi()),
]