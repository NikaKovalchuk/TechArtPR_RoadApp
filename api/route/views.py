import logging

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from api.locations.models import Location
from api.route.models import Route
from api.route.serializer import RouteSerializer, ListRouteSerializer

logger = logging.getLogger(__file__)

def get_request_data(data, route_id=None):
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
            if route_id:
                location.route_id = route_id
            location.save()
            locations.append(location.id)
    data["locations"] = locations
    return data


class RouteList(ListCreateAPIView):
    queryset = Route.objects.all()
    serializer_class = ListRouteSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
    search_fields = ['title']

    ordering_fields = '__all__'
    ordering = ['-updated_at']

    def get_serializer_context(self):
        if self.request.method == "POST":
            return get_request_data(self.request.data)
        return self.request.data

    def get_serializer_class(self):
        if self.request.method == "POST":
            return RouteSerializer
        return ListRouteSerializer


class RouteDetail(RetrieveUpdateDestroyAPIView):
    queryset = Route.objects.all()
    serializer_class = ListRouteSerializer

    def get_serializer_context(self):
        if self.request.method == "PUT":
            return get_request_data(self.request.data, self.kwargs['pk'])
        return self.request.data

    def get_serializer_class(self):
        if self.request.method == "PUT":
            return RouteSerializer
        return ListRouteSerializer
