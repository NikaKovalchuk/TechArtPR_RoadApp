from django.contrib import admin
from django.contrib.admin import ModelAdmin

from api.category.models import Category


@admin.register(Category)
class CategoryAdmin(ModelAdmin):
    list_display = ['title', 'icon', 'updated_at']
    search_fields = ['title', ]
    ordering = ['-updated_at']
    help_texts = {
        'title': 'Group to which this message belongs to',
    }
