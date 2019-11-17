from api.models import Location
from api.serializers import LocationSerializer


from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class LocationList(ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class SnippetDetail(RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
