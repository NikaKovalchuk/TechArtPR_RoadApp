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
