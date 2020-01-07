from api.models import Category
from api.serializers import CategorySerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


class CategoryList(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
