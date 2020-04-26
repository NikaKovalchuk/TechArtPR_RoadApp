import datetime
import pytz

from django.db.utils import DataError, IntegrityError
from django_filters.rest_framework import DjangoFilterBackend
from django.test import TestCase
from rest_framework import filters
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from unittest import mock

from .models import Category
from .serializer import CategoryMinSerializer
from .views import CategoryList, CategoryDetail
from ..lib.random_string import random_string


class ModelTestCase(TestCase):

    def test_category_has_title_field(self):
        """Category has title field"""
        category = Category.objects.create(title="title")
        self.assertIsNotNone(category.title)

    def test_title_field_is_required(self):
        """Category title field is required"""
        test = Category.objects.create(title="test")
        with self.assertRaises(IntegrityError):
            test.title = None
            test.save()

    def test_title_field_max_size_is_100(self):
        """Category title field max size is 100"""
        test = random_string(101)
        with self.assertRaises(DataError):
            Category.objects.create(title=test, icon="test").save()

    def test_icon_field_is_not_required(self):
        """Category icon field is not required"""
        category = Category.objects.create(title="test")
        self.assertEquals(category.icon, '')

    def test_icon_field_max_size_is_100(self):
        """Category icon field max size is 100"""
        test = random_string(101)
        with self.assertRaises(DataError):
            Category.objects.create(title="test", icon=test)

    def test_str_equal_to_title_field(self):
        """Category str equal to title field"""
        test = Category.objects.create(title="test", icon="test")
        self.assertEquals(test.title, test.__str__())

    def test_create_at_use_auto_add_now(self):
        """Category create_at use auto_add_now"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            category = Category.objects.create(title="test")
            self.assertEqual(category.created_at, mocked)

    def test_updated_at_use_auto_add_now(self):
        """Category updated_at use auto_add"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            category = Category.objects.create(title="test")
            self.assertEqual(category.updated_at, mocked)


class ViewsTestCase(TestCase):

    def test_category_view_list_fields(self):
        list = CategoryList()
        self.assertEqual(list.serializer_class, CategoryMinSerializer)
        self.assertEqual(list.filter_backends, [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend])
        self.assertEqual(list.search_fields, ['title'])
        self.assertEqual(list.ordering_fields, '__all__')
        self.assertEqual(list.ordering, ['-updated_at'])

    def test_category_detail_view_list_fields(self):
        list = CategoryDetail()
        self.assertEqual(list.serializer_class, CategoryMinSerializer)

    def test_category_view_list_bases_is_list_create_view(self):
        self.assertEquals(CategoryList.__bases__, (ListCreateAPIView,))

    def test_category_view_detail_bases_is_retrieve_ud_view(self):
        self.assertEquals(CategoryDetail.__bases__, (RetrieveUpdateDestroyAPIView,))
