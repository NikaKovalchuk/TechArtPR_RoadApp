from api.models import *
from django.contrib import admin

from .category import CategoryAdmin
from .location import LocationAdmin
from .route import RouteAdmin

admin.site.register(Category, CategoryAdmin)
admin.site.register(Route, RouteAdmin)
admin.site.register(Location, LocationAdmin)
