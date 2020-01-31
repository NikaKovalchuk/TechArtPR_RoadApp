from api.route.models import Route

from django.contrib.admin import ModelAdmin
from django.contrib import admin


@admin.register(Route)
class RouteAdmin(ModelAdmin):
    list_display = ['title', 'rating', 'updated_at']
    search_fields = ['title']
    fields = ['title', 'categories', 'description']
    ordering = ['-updated_at']
