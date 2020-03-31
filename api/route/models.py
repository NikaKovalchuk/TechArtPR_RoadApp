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

    # def calculate_rating(self):
    #     route = Route.objects.get(id=self.id)
    #     locations = route.locations.all()
    #     summary_rating = 0
    #     for location in locations:
    #         if hasattr(location, "rating"):
    #             summary_rating += location.rating
    #     return summary_rating if summary_rating else None
    #
    # def save(self):
    #     super(Route, self).save()
    #     self.rating = self.calculate_rating()
    #     super(Route, self).save()
