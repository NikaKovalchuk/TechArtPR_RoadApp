from rest_framework import serializers

from api.models import Category


class CategoryMinSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = [
            'id',
            'title',
            'description',
        ]

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance


class CategorySerializer(CategoryMinSerializer):

    class Meta(CategoryMinSerializer.Meta):
        fields = '__all__'
