from django.contrib import admin
from django.contrib.admin import ModelAdmin

from api.route.models import Route


@admin.register(Route)
class RouteAdmin(ModelAdmin):
    list_display = ['title', 'updated_at', ]
    search_fields = ['title']
    fields = ['title', 'categories', 'description', ]
    ordering = ['-updated_at']
