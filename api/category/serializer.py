from api.category.models import Category

from rest_framework import serializers


class CategoryMinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'title',
            'icon'
        ]
