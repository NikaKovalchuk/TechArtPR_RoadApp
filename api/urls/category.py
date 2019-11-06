from api.views import *
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', category_list),
    path('<int:pk>/', category_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
