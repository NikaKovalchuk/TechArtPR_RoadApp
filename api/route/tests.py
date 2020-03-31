import datetime
from unittest import mock

import pytz
from django.db.utils import IntegrityError, DataError
from django.test import TestCase

from .models import Route
from ..lib.random_string import random_string


class ModelTestCase(TestCase):

    def test_has_title_field(self):
        """Route has title field"""
        title = Route.objects.create(title="title")
        self.assertIsNotNone(title.title)

    def test_title_field_is_required(self):
        """Route title field is not required"""
        test = Route.objects.create(title="test")
        with self.assertRaises(IntegrityError):
            test.title = None
            test.save()

    def test_title_field_max_size_is_100(self):
        """Route title field max size is 100"""
        test = random_string(101)
        with self.assertRaises(DataError):
            Route.objects.create(title=test, icon="test")

    def test_has_description_field(self):
        """Route has description field"""
        test = Route.objects.create(description="description")
        self.assertIsNotNone(test.description)

    def test_description_field_is_not_required(self):
        """Route description field is not required"""
        test = Route.objects.create(description="description")
        test.description = None
        test.save()

    def test_description_field_max_size_is_1000(self):
        """Category description field max size is 1000"""
        test = random_string(1001)
        with self.assertRaises(DataError):
            Route.objects.create(description=test)

    def test_rating_field_not_required(self):
        """Route rating field not required"""
        test = Route.objects.create(title="213123")
        test.rating = None
        test.save()

    def test_create_at_use_auto_add_now(self):
        """Route create_at use auto_add_now"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            route = Route.objects.create(title="test")
            self.assertEqual(route.created_at, mocked)

    def test_updated_at_use_auto_add_now(self):
        """Location updated_at use auto_add"""
        mocked = datetime.datetime(2018, 4, 4, 0, 0, 0, tzinfo=pytz.utc)
        with mock.patch('django.utils.timezone.now', mock.Mock(return_value=mocked)):
            route = Route.objects.create(title="test")
            self.assertEqual(route.created_at, mocked)
            route.title = "test1"
            route.save()
            self.assertEqual(route.created_at, mocked)
