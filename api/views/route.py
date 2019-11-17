from api.models import Route
from api.serializers import RouteSerializer


from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class RouteList(ListCreateAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer


class RouteDetail(RetrieveUpdateDestroyAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer
