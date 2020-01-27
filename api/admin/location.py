from django.contrib.admin import ModelAdmin
from googleplaces import GooglePlaces
from api.forms import Location

from app.settings import GOOGLE_MAPS_API_KEY

google_places = GooglePlaces(GOOGLE_MAPS_API_KEY)


class LocationAdmin(ModelAdmin):
    list_display = ['title', 'rating', 'updated_at']
    # fields = ['coordinates']
    ordering = ['-updated_at']

    # formfield_overrides = {
    #    AddressField: {'widget': GoogleMapsAddressWidget},
    # }
    #
    # def save_model(self, request, obj, form, change):
    #     lat_lng = {"lat": obj.coordinates[0], "lng": obj.coordinates[1]}
    #     location = google_places.text_search(lat_lng=lat_lng)
    #     print(location)
    #     obj.rating = location[0].rating
    #     obj.title = location[0].name
    #     super(LocationAdmin, self).save_model(request, obj, form, change)
