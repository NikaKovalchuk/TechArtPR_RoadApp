from django.contrib import admin


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'updated_at']
    ordering = ['-updated_at']
    # actions = [make_published]


class LocationAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'updated_at']
    ordering = ['-updated_at']
    # actions = [make_published]


class RouteAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'updated_at']
    ordering = ['-updated_at']
    # actions = [make_published]
