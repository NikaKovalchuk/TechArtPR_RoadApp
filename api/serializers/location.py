from rest_framework import serializers

from api.models import Location
from api.serializers import CategoryMinSerializer


class LocationMinSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = [
            'id',
            'title',
            'description',
            'image_link',
            'longitude',
            'latitude',
            'link',
            'price',
        ]

    def create(self, validated_data):
        return Location.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image_link = validated_data.get('image_link', instance.image_link)
        instance.longitude = validated_data.get('longitude', instance.longitude)
        instance.latitude = validated_data.get('latitude', instance.latitude)
        instance.link = validated_data.get('link', instance.link)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance


class LocationSerializer(LocationMinSerializer):
    categories = CategoryMinSerializer(many=True)

    class Meta(LocationMinSerializer.Meta):
        fields = '__all__'
