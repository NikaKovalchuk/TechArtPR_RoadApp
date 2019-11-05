from django.db.models import (
    CharField,
    ManyToManyField,
    Model,
    TextField,
)

from api.location.models import Location


class Route(Model):

    title = CharField(max_length=100, null=False)
    description = TextField(max_length=1000, null=False, blank=True)

    locations = ManyToManyField(Location, null=True)
