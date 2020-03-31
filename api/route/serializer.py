from rest_framework.relations import PrimaryKeyRelatedField
from rest_framework.serializers import ModelSerializer

from api.category.models import Category
from api.locations.models import Location
from api.route.models import Route


class LocationSerializer(ModelSerializer):
    def to_representation(self, value):
        return value.google_key

    class Meta:
        model = Location


class RouteSerializer(ModelSerializer):
    categories = PrimaryKeyRelatedField(
        many=True,
        allow_null=True,
        queryset=Category.objects.all()
    )
    locations = LocationSerializer(many=True, allow_null=True)

    class Meta:
        model = Route
        fields = ['id', 'title', 'description', 'categories', 'locations']

    def update(self, route, validated_data):
        route.title = validated_data.get('title', route.title)
        route.description = validated_data.get('description', route.description)
        if validated_data.get('locations'):
            route.locations.set(validated_data.get('locations', route.locations))
        if validated_data.get('categories'):
            route.categories.set(validated_data.get('categories', route.categories))
        route.save()
        return route
