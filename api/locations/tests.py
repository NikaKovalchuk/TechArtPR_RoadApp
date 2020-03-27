import datetime
from unittest import mock

import pytz
from django.db.utils import IntegrityError
from django.test import TestCase

from .models import Location
from ..route.serializer import LocationSerializer


class ModelTestCase(TestCase):

    def test_location_has_google_key_field(self):
        """Location has google_key field"""
        title = Location.objects.create(google_key="google_key")
        self.assertEqual(title.google_key, "google_key")

    def test_google_key_field_is_required(self):
        """Location title google_key is required"""
        test = Location.objects.create(google_key="google_key")
        with self.assertRaises(IntegrityError):
            test.google_key = None
            test.save()

    def test_rating_field_not_required(self):
        """Location rating field not required"""
        Location.objects.create(google_key="google_key")

    def test_str_equal_to_google_key_field(self):
        """Location str equal to google_key field"""
        test = Location.objects.create(google_key="test")
        self.assertEquals(test.google_key, test.__str__())

    def test_create_at_use_auto_add_now(self):
        """Location create_at use auto_add_now"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            location = Location.objects.create(google_key="test")
            self.assertEqual(location.created_at, mocked)

    def test_updated_at_use_auto_add_now(self):
        """Location updated_at use auto_add"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            location = Location.objects.create(google_key="test")
            self.assertEqual(location.updated_at, mocked)


class SerializerTestCase(TestCase):

    def setUp(self):
        self.location_attributes = {
            'google_key': 'google_key',
            'rating': 4,
        }

        self.location = Location.objects.create(**self.location_attributes)
        self.serializer = LocationSerializer(instance=self.location)

    def test_used_fields(self):
        serializer = LocationSerializer(data=self.location)
        self.assertFalse(serializer.is_valid())
