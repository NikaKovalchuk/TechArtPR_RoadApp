"""Module for Location API."""
from django.db.models import Model, ForeignKey, CASCADE
from django.contrib.gis.db.models import PointField
from api.models import Route


class Location(Model):

    route = ForeignKey(Route, on_delete=CASCADE)
    coordinates = PointField(help_text="To generate the map for your location")

