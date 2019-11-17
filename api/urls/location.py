from rest_framework.urlpatterns import format_suffix_patterns

from api.views import *
from django.urls import path

urlpatterns = [
    path('', LocationList.as_view()),
    path('<int:pk>/', LocationDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
