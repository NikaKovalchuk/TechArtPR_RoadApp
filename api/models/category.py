from django.db.models import (
    DateTimeField,
    CharField,
    ManyToManyField,
    Model,
    TextField,
)

from api.models import Location


class Category(Model):

    title = CharField(max_length=100, null=False)
    description = TextField(max_length=1000, blank=True)

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    locations = ManyToManyField(Location, blank=True)

    def __str__(self):
        return self.title
