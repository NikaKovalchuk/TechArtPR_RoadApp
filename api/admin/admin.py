from django.contrib.admin import ModelAdmin, TabularInline
from django.contrib.gis.db.models import PointField
from mapwidgets import GooglePointFieldInlineWidget

from api.forms import RouteAdminForm, Location


class CategoryAdmin(ModelAdmin):
    list_display = ['title', 'icon', 'updated_at']
    ordering = ['-updated_at']


class LocationAdminInline(TabularInline):
    model = Location
    extra = 1
    formfield_overrides = {
        PointField: {"widget": GooglePointFieldInlineWidget}
    }


class RouteAdmin(ModelAdmin):
    list_display = ['title', 'description', 'updated_at']
    ordering = ['-updated_at']
    inlines = (LocationAdminInline,)

    def get_form(self, request, obj=None, **kwargs):
        self.form = RouteAdminForm
        return super(RouteAdmin, self).get_form(request, obj, **kwargs)
