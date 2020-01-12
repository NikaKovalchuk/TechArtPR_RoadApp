from .admin import *
from api.models import *
from django.contrib import admin

admin.site.register(Category, CategoryAdmin)
admin.site.register(Route, RouteAdmin)
