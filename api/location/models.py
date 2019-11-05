"""Module for Location API."""
from django.db.models import (
    CharField,
    DecimalField,
    IntegerField,
    Model,
    TextField,
)


class Location(Model):

    title = CharField(max_length=100, null=False)
    description = TextField(max_length=1000, null=False, blank=True)
    image_link = TextField(null=True)

    longitude = DecimalField(max_digits=9, decimal_places=6)
    latitude = DecimalField(max_digits=9, decimal_places=6)

    link = TextField(null=True)
    price = IntegerField(null=True)

