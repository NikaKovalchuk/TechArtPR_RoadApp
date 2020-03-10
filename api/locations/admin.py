from django.contrib.admin import ModelAdmin

from api.locations.models import Location
from django.contrib import admin
from django_google_maps.fields import AddressField
from django_google_maps.widgets import GoogleMapsAddressWidget


@admin.register(Location)
class LocationAdmin(ModelAdmin):
    list_display = ['address']
    search_fields = ('address',)

    fields = ['address']
