from django.db.models import (
    CharField,
    DateTimeField,
    Model,
    TextField,
    ManyToManyField,
    AutoField,
)

from api.category.models import Category


class Route(Model):
    id = AutoField(primary_key=True)

    title = CharField(max_length=100)
    description = TextField(max_length=1000, blank=True)

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    categories = ManyToManyField(Category, blank=True)

    def __str__(self):
        return self.title
