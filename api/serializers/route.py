from rest_framework import serializers

from api.models import Route
from api.serializers import LocationMinSerializer


class RouteSerializer(serializers.ModelSerializer):
    locations = LocationMinSerializer(many=True)

    class Meta:
        model = Route
        fields = '__all__'

    def create(self, validated_data):
        return Route.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.locations = validated_data.get('locations', instance.locations)
        instance.save()
        return instance

