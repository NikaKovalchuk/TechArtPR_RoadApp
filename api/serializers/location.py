from rest_framework import serializers

from api.models import Location
from api.serializers import CategoryMinSerializer


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    categories = CategoryMinSerializer(source="get_categories", read_only=True, many=True)

    class Meta:
        model = Location
        fields = (
            'id',
            'categories',
            'title',
            'description',
            'image_link',
            'longitude',
            'latitude',
            'created_at',
            'updated_at',
            'link',
            'price',
        )


class LocationMinSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Location
        fields = ('id',)
