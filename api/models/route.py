from django.db.models import (
    CharField,
    DateTimeField,
    DecimalField,
    Model,
    TextField,
    ManyToManyField,
    AutoField,
)

from api.models import Category, Location


class Route(Model):
    id = AutoField(primary_key=True)

    title = CharField(max_length=100, null=False)
    description = TextField(max_length=1000, blank=True)

    rating = DecimalField(max_digits=5, decimal_places=1, blank=True, null=True)
    created_at = DateTimeField(auto_now_add=True)
    updated_at = DateTimeField(auto_now=True)

    locations = ManyToManyField(Location, blank=True)
    categories = ManyToManyField(Category, null=True, blank=True)

    def __str__(self):
        return self.title

    def calculate_rating(self):
        route = Route.objects.get(id=self.id)
        locations = route.locations.all()
        summary_rating = 0
        for location in locations:
            if location.rating:
                summary_rating += location.rating

        return summary_rating if summary_rating else None

    def save(self):
        super(Route, self).save()
        self.rating = self.calculate_rating()
        super(Route, self).save()
