"""Module for Location API."""
from django.db.models import Model, CharField, DecimalField, DateTimeField
from django.contrib.gis.db.models import PointField


class Location(Model):

    title = CharField(max_length=1000, blank=True)
    rating = DecimalField(max_digits=5, decimal_places=1, blank=True)
    coordinates = PointField(help_text="To generate the map for your location")

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
