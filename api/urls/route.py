from rest_framework.urlpatterns import format_suffix_patterns

from api.views import *
from django.urls import path

urlpatterns = [
    path('', RouteList.as_view()),
    path('<int:pk>/', RouteDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
