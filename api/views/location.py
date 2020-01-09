from api.models import Location, Category
from api.serializers import LocationSerializer

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class LocationList(ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    search_fields = ['title']

    ordering_fields = '__all__'
    ordering = ['-updated_at']

    def transform_price(self, price):
        if price == '':
            return None
        return int(price)

    def get_queryset(self):
        price = self.request.query_params.get('price', None)
        category = self.request.query_params.get('category', None)
        queryset = Location.objects.all()

        if price is not None:
            prices = [self.transform_price(x) for x in price.split(',')]
            queryset = queryset.filter(price__in=prices)
        if category is not None:
            ids = [x for x in category.split(',')]
            queryset = queryset.filter(categories__in=ids)
        return queryset


class LocationDetail(RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
