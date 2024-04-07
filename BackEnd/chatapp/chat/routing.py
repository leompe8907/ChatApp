from django.urls import path
from .consumers import PersonalChatConsumer

websocket_urlpatterns = [
    path('chat/', PersonalChatConsumer.as_asgi()),
]
