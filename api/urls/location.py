from api.views import *
from django.urls import path

urlpatterns = [
    path('<int:pk>/', LocationAPI.as_view()),
]
