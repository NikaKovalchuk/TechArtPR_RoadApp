from django.forms import ModelForm

from api.route.models import Route


class RouteAdminForm(ModelForm):
    class Meta:
        model = Route

        fields = "__all__"
