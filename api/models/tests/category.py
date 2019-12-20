from django.db import IntegrityError
from django.test import TestCase
from api.models import Category


class CategoryTestCase(TestCase):

    def test_have_title_field(self):
        category = Category()
        self.assertTrue(hasattr(category, "title"))

    def test_have_description_field(self):
        category = Category()
        self.assertTrue(hasattr(category, "description"))

    def test_have_created_at_field(self):
        category = Category()
        self.assertTrue(hasattr(category, "created_at"))

    def test_have_updated_at_field(self):
        category = Category()
        self.assertTrue(hasattr(category, "updated_at"))

    def test_title_field_is_required(self):
        category = Category(title=None)
        self.assertRaises(IntegrityError, lambda: category.save())

    def test_description_field_is_required(self):
        category = Category(description=None)
        self.assertRaises(IntegrityError, lambda: category.save())
