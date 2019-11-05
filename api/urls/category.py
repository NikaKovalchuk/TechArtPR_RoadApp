from api.views import *
from django.urls import path

urlpatterns = [
    path('<int:pk>/', CategoryAPI.as_view()),
]
