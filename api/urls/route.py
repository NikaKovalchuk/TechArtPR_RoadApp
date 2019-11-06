from rest_framework.urlpatterns import format_suffix_patterns

from api.views import *
from django.urls import path

urlpatterns = [
    path('', route_list),
    path('<int:pk>/', route_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
