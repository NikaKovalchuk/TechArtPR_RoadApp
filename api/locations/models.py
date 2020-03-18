"""Module for Location API."""
from django.db.models import Model, CharField, DateTimeField, DecimalField


class Location(Model):

    google_key = CharField(max_length=1000, null=True)
    address = CharField(max_length=1000, null=True)
    rating = DecimalField(decimal_places=1, null=True)

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    def __str__(self):
        return self.address
