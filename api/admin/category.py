from django.contrib.admin import ModelAdmin
from googleplaces import GooglePlaces

from app.settings import GOOGLE_MAPS_API_KEY

google_places = GooglePlaces(GOOGLE_MAPS_API_KEY)


class CategoryAdmin(ModelAdmin):
    list_display = ['title', 'icon', 'updated_at']
    ordering = ['-updated_at']
