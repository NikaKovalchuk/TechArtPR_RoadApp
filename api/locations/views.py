from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from api.locations.models import Location


class LocationList(ListCreateAPIView):
    queryset = Location.objects.all()


class LocationDetail(RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
