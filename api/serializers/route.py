from rest_framework import serializers

from api.models import Route
from api.serializers import LocationMinSerializer


class RouteSerializer(serializers.HyperlinkedModelSerializer):
    locations = LocationMinSerializer(source="get_locations", read_only=True, many=True)

    class Meta:
        model = Route
        fields = (
            'id',
            'title',
            'description',
            'locations',
            'created_at',
            'updated_at',
        )
