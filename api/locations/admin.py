from django.contrib.admin import ModelAdmin

from api.locations.models import Location
from django.contrib import admin


@admin.register(Location)
class LocationAdmin(ModelAdmin):
    list_display = ['google_key', 'order']
    search_fields = ('google_key',)

    fields = ['google_key', 'order', 'route']
