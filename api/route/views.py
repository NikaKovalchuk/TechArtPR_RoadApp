import logging

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from api.locations.models import Location
from api.route.models import Route
from api.route.serializer import RouteSerializer

logger = logging.getLogger(__file__)


def get_request_data(data, route_id):
    locations = []
    if data.get("locations"):
        for idx, loc in enumerate(data["locations"]):
            location = Location.objects.filter(
                route_id=route_id,
                google_key=loc
            ).first()
            if not location:
                location = Location()
            location.google_key = loc
            location.order = idx
            location.route_id = route_id
            location.save()
            locations.append(location.id)
    data["locations"] = locations
    return data


class RouteList(ListCreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
    search_fields = ['title']

    ordering_fields = '__all__'
    ordering = ['-updated_at']


class RouteDetail(RetrieveUpdateDestroyAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

    def get_serializer_context(self):
        if self.request.method == "PUT":
            return get_request_data(self.request.data, self.kwargs['pk'])
        return self.request.data
