"""Module for Location API."""
from django.db.models import (
    CharField,
    DateTimeField,
    DecimalField,
    IntegerField,
    ManyToManyField,
    Model,
    TextField,
)

from api.models import Category


class Location(Model):

    title = CharField(max_length=100, null=False)
    description = TextField(max_length=1000, blank=True)
    image_link = TextField(blank=True)

    longitude = DecimalField(max_digits=9, decimal_places=6)
    latitude = DecimalField(max_digits=9, decimal_places=6)

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    link = TextField(blank=True)
    price = IntegerField(null=True, blank=True)

    categories = ManyToManyField(Category, blank=True)

    def __str__(self):
        return self.title
