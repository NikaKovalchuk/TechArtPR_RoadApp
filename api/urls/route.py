from api.views import *
from django.urls import path

urlpatterns = [
    path('<int:pk>/', RouteAPI.as_view()),
]
