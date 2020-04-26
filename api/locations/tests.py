import datetime
from unittest import mock

import pytz
from django.db.utils import IntegrityError
from django.test import TestCase
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from .models import Location
from ..route.serializer import LocationSerializer
from .views import LocationDetail, LocationList


class ModelTestCase(TestCase):

    def test_location_has_google_key_field(self):
        """Location has google_key field"""
        title = Location.objects.create(google_key="google_key", order=2)
        self.assertEqual(title.google_key, "google_key")

    def test_google_key_field_is_required(self):
        """Location title google_key is required"""
        test = Location.objects.create(google_key="google_key", order=2)
        with self.assertRaises(IntegrityError):
            test.google_key = None
            test.save()

    def test_location_has_order_field(self):
        """Location has order field"""
        title = Location.objects.create(google_key="google_key", order=2)
        self.assertEqual(title.order, 2)

    def test_order_field_required(self):
        """Location order field required"""
        test = Location.objects.create(google_key="google_key", order=4)
        with self.assertRaises(IntegrityError):
            test.order = None
            test.save()

    def test_location_has_route_field(self):
        """Location has route field"""
        title = Location.objects.create(google_key="google_key", order=2)
        self.assertEqual(title.route, None)

    def test_route_not_field_required(self):
        """Location route field not required"""
        test = Location.objects.create(google_key="google_key", order=4)
        test.save()

    def test_str_equal_to_google_key_field(self):
        """Location str equal to google_key field"""
        test = Location.objects.create(google_key="test", order=2)
        self.assertEquals(test.google_key, test.__str__())

    def test_create_at_use_auto_add_now(self):
        """Location create_at use auto_add_now"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            category = Location.objects.create(google_key="test", order=2)
            self.assertEqual(category.created_at, mocked)

    def test_updated_at_use_auto_add_now(self):
        """Location updated_at use auto_add"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            location = Location.objects.create(google_key="test", order=2)
            self.assertEqual(location.updated_at, mocked)
            location.google_key = "test1"
            location.save()
            self.assertEqual(location.created_at, mocked)

class ViewsTestCase(TestCase):

    def test_location_view_list_bases_is_list_create_view(self):
        self.assertEquals(LocationList.__bases__, (ListCreateAPIView,))

    def test_location_view_detail_bases_is_retrieve_ud_view(self):
        self.assertEquals(LocationDetail.__bases__, (RetrieveUpdateDestroyAPIView,))


class SerializerTestCase(TestCase):

    def setUp(self):
        self.location_attributes = {
            'google_key': 'google_key',
            'order': '1',
        }
        self.location = Location.objects.create(**self.location_attributes)
        self.serializer = LocationSerializer(instance=self.location)

    def test_used_fields(self):
        serializer = LocationSerializer(data=self.location)
        self.assertFalse(serializer.is_valid())