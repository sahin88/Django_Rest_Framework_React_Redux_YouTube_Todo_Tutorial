from django.shortcuts import render

from .serializers import ArticlesSerializer
from .models import Articles
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated,))
def article_list(request):
    if request.method == 'GET':
        articles = Articles.objects.filter(user=request.user)
        serializer = ArticlesSerializer(articles, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        #author, image, title
        request.data['user'] = request.user.id
        serializer = ArticlesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])
@permission_classes((IsAuthenticated,))
@authentication_classes([TokenAuthentication])
def article_detail(request, pk):
    try:
        article = Articles.objects.get(pk=pk)
    except:
        return HttpResponse(status.HTTP_404_NOT_FOUND)
    if request.user != article.user:
        data = {}
        data['failure'] = "You dont have permissions to change or delete this item"
        return Response(data=data)

    if request.method == 'GET':
        serializer = ArticlesSerializer(article)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = ArticlesSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Responser(serializer.erros, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'PATCH':
        serializer = ArticlesSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Responser(serializer.erros, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'DELETE':
        article.delete()
        return Response(serializer.errors, status=statis.HTTP_204_NO_CONTENT)
