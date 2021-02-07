from django.shortcuts import render
from .serializers import LoginSerializer, registrationSerializer
from rest_framework.views import APIView
from django.contrib.auth import login as django_login, logout as django_logout
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
# ?


from django.contrib.auth import get_user_model

User = get_user_model()


class LoginView(APIView):
    def post(self, request):
        serialized_data = LoginSerializer(data=request.data)
        serialized_data.is_valid(raise_exception=True)
        user = serialized_data.validated_data['user']
        django_login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=200)


class LogoutView(APIView):
    def post(self, request):
        django_logout(request)
        return Response(status=204)


@api_view(['POST'])
def registration(request):
    serializer = registrationSerializer(data=request.data)
    if serializer.is_valid():
        serilalizer.save()
        return Response(serializer.data, status=staus.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
