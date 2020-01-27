from django.contrib.admin import ModelAdmin
from googleplaces import GooglePlaces

from app.settings import GOOGLE_MAPS_API_KEY

google_places = GooglePlaces(GOOGLE_MAPS_API_KEY)


class RouteAdmin(ModelAdmin):
    list_display = ['title', 'rating', 'updated_at']
    fields = ['title', 'description', 'locations', 'categories']
    ordering = ['-updated_at']
