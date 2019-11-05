from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import *
from api.serializers import RouteSerializer


class RouteAPI(APIView):
    def get_object(self, pk):
        try:
            return Route.objects.get(pk=pk)
        except Route.DoesNotExist:
            raise Http404()

    def get(self, request, pk):
        route = self.get_object(pk)
        serializer = RouteSerializer(route)
        return Response(serializer.data, status=status.HTTP_200_OK)
