import jwt
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta

User = get_user_model()


class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        token = self.extract_token(request=request)  # Pasar el objeto request como argumento
        if token is None:
            return None
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            self.verify_token(payload=payload)

            user_id = payload["id"]
            user = User.objects.get(id=user_id)  # 'objects' en lugar de 'objets'
            return user
        except (InvalidTokenError, ExpiredSignatureError, User.DoesNotExist):
            raise AuthenticationFailed("Invalid Token")

    def verify_token(self, payload):
        if "exp" not in payload:
            raise InvalidTokenError("Token has no Expired")
        exp_timestamp = payload["exp"]
        current_time = datetime.now().timestamp()
        if current_time > exp_timestamp:
            raise ExpiredSignatureError("Token Expired")

    def extract_token(self, request):  # Recibir el objeto request
        auth_header = request.headers.get('Authorization')
        if auth_header and auth_header.startswith('Bearer'):
            return auth_header.split(" ")[1]
        return None

    @staticmethod
    def generate_token(payload):
        expiration = datetime.now() + timedelta(hours=24)  # 'expiration' en lugar de 'expiation'
        payload["exp"] = expiration
        token = jwt.encode(payload=payload, key=settings.SECRET_KEY, algorithm="HS256")
        return token
