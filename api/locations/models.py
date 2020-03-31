"""Module for Location API."""
from django.db.models import Model, CharField, DateTimeField, IntegerField, ForeignKey, CASCADE

from api.route.models import Route


class Location(Model):
    google_key = CharField(max_length=1000)
    order = IntegerField()
    route = ForeignKey(Route, on_delete=CASCADE, related_name='locations')

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    def __str__(self):
        return self.google_key
