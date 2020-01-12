from rest_framework import serializers

from api.models import Route, Location


class LocationSerializer(serializers.ModelSerializer):
    latitude = serializers.SerializerMethodField()
    longtitude = serializers.SerializerMethodField()

    class Meta:
        model = Location
        fields = ('latitude', 'longtitude')

    def get_latitude(self, obj):
        return obj.coordinates[0]

    def get_longtitude(self, obj):
        return obj.coordinates[1]


class RouteSerializer(serializers.ModelSerializer):
    locations = LocationSerializer(source='location_set', many=True)

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

