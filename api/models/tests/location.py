from django.db import IntegrityError
from django.test import TestCase
from api.models import Location


class LocationTestCase(TestCase):

    def test_have_title_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "title"))

    def test_have_description_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "description"))

    def test_have_image_link_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "image_link"))

    def test_have_longitude_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "longitude"))

    def test_have_latitude_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "latitude"))

    def test_have_created_at_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "created_at"))

    def test_have_updated_at_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "updated_at"))

    def test_have_link_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "link"))

    def test_have_price_field(self):
        location = Location()
        self.assertTrue(hasattr(location, "price"))

    def test_title_field_is_required(self):
        location = Location(title=None)
        self.assertRaises(IntegrityError, lambda: location.save())

    def test_description_field_is_required(self):
        location = Location(description=None)
        self.assertRaises(IntegrityError, lambda: location.save())
