from django.contrib.admin import ModelAdmin

from api.locations.models import Location
from django.contrib import admin
from django_google_maps.fields import AddressField
from django_google_maps.widgets import GoogleMapsAddressWidget


@admin.register(Location)
class LocationAdmin(ModelAdmin):
    list_display = ['title', 'rating']
    search_fields = ('title',)

    fields = ['address', 'geolocation']

    formfield_overrides = {
        AddressField: {'widget': GoogleMapsAddressWidget(attrs={'data-map-type': 'roadmap'})},
    }
