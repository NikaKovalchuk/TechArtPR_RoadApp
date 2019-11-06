from rest_framework.urlpatterns import format_suffix_patterns

from api.views import *
from django.urls import path

urlpatterns = [
    path('', location_list),
    path('<int:pk>/', location_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
