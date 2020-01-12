from django.db.models import (
    CharField,
    DateTimeField,
    Model,
)


class Category(Model):

    title = CharField(max_length=100, blank=False, null=False)
    icon = CharField(max_length=100, blank=False, null=False)

    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
