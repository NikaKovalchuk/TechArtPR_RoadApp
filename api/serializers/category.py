from rest_framework import serializers

from api.models import Category


class CategorySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Category
        fields = (
            'id',
            'title',
            'description',
            'created_at',
            'updated_at',
        )


class CategoryMinSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Category
        fields = ('id',)
