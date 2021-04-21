from django.shortcuts import render
from rest_framework import generics, mixins
from rest_framework.permissions import *

from django.contrib.auth.models import User
from api.serializers import UserSerializer

# class UserDetailViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
