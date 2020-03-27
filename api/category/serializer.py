from rest_framework import serializers

from api.category.models import Category


class CategoryMinSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = [
            'id',
            'title',
            'icon'
        ]

    def create(self, validated_data):
        return Category.objects.create(**validated_data)
