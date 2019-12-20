from django.db import IntegrityError
from django.test import TestCase
from api.models import Route


class RouteTestCase(TestCase):

    def test_have_title_field(self):
        route = Route()
        self.assertTrue(hasattr(route, "title"))

    def test_have_description_field(self):
        route = Route()
        self.assertTrue(hasattr(route, "description"))

    def test_have_created_at_field(self):
        route = Route()
        self.assertTrue(hasattr(route, "created_at"))

    def test_have_updated_at_field(self):
        route = Route()
        self.assertTrue(hasattr(route, "updated_at"))

    def test_title_field_is_required(self):
        route = Route(title=None)
        self.assertRaises(IntegrityError, lambda: route.save())

    def test_description_field_is_required(self):
        route = Route(description=None)
        self.assertRaises(IntegrityError, lambda: route.save())
