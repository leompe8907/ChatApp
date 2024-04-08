from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import get_user_model
from .serializers import UserGetSerializer

User = get_user_model()

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user_list(request):
    try:
        users = User.objects.exclude(id=request.user.id)
        print("Users:", users)  # Imprime los usuarios obtenidos de la consulta
        serializer = UserGetSerializer(users, many=True)
        print("Serialized data:", serializer.data)  # Imprime los datos serializados
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        print("Error in getting user list:", str(e))  # Imprime el error si ocurre alguno
        return Response({"error": "error in getting user list"}, status=status.HTTP_400_BAD_REQUEST)
