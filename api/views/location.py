from api.models import Location, Category
from api.serializers import LocationSerializer

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class LocationList(ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['categories']
    search_fields = ['title']

    ordering_fields = '__all__'
    ordering = ['-updated_at']

    def transform_price(self, price):
        if price == '':
            return None
        return int(price)

    def get_queryset(self):
        price = self.request.query_params.get('price', None)
        if price is not None:
            price = [self.transform_price(x) for x in price.split(',')]
            queryset = Location.objects.filter(price__in=price)
        else:
            queryset = Location.objects.all()
        return queryset


class LocationDetail(RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
