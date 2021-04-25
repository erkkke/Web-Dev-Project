from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

from api.views import *

urlpatterns = [
    # Work In Progress
    # path('', views.IndexView.as_view(), name='index'),
    path('login/', obtain_jwt_token),
    path('users/', UserListAPIView.as_view(),),
    path('users/<int:pk>', UserDetailAPIView.as_view(),)
    # path('home/', views.?????.as_view(), name='home'),
    # path('categories/', views.?????.as_view(), name='categories'),
    # path('<int:pk>/', views.?????.as_view(), name='userDetail'),
    # path('<int:pk>/follows/', views.?????.as_view(), name='userFollowsList'),
    # path('<int:pk>/albums/', views.?????.as_view(), name='userAlbumList'),
    # path('<int:pk>/albums/<int:pk>/', views.?????.as_view(), name='userAlbumDetail'),
    # path('<int:pk>/albums/<int:pk>/photo/', views.?????.as_view(), name='userPhotoList'),
    # path('<int:pk>/albums/<int:pk>/photo/<int:pk>/', views.?????.as_view(), name='userPhotoDetail'),
    # path('<int:pk>/settings/', views.?????.as_view(), name='userSettingList'),
]