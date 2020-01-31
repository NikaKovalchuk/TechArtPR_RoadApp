from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from api.category.models import Category
from api.category.serializer import CategorySerializer


class CategoryList(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetail(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
