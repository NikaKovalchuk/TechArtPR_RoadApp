"""Module for Location API."""
from django.db.models import Model, CharField, DecimalField, DateTimeField
from django_google_maps.fields import AddressField, GeoLocationField


class Location(Model):

    title = CharField(max_length=1000, null=True)
    rating = DecimalField(max_digits=5, decimal_places=1, null=True)
    place_id = CharField(max_length=1000, null=True)

    address = AddressField(max_length=200)
    geolocation = GeoLocationField(max_length=100)

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def save(self):
        self.title = self.address
        super(Location, self).save()
