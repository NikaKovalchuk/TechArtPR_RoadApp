from django.db.models import (
    CharField,
    DateTimeField,
    Model,
    TextField,
)


class Category(Model):

    title = CharField(max_length=100, null=False)
    description = TextField(max_length=1000, blank=True)

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
