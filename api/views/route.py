from api.models import Route
from api.serializers import RouteSerializer

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class RouteList(ListCreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['locations']
    search_fields = ['title', 'description', ]

    ordering_fields = '__all__'
    ordering = ['-updated_at']


class RouteDetail(RetrieveUpdateDestroyAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
