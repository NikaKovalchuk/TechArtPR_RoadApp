from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import *
from api.serializers import LocationSerializer


class LocationAPI(APIView):
    def get_object(self, pk):
        try:
            return Location.objects.get(pk=pk)
        except Location.DoesNotExist:
            raise Http404()

    def get(self, request, pk):
        location = self.get_object(pk)
        serializer = LocationSerializer(location)
        return Response(serializer.data, status=status.HTTP_200_OK)
