from django.forms import ModelForm
from mapwidgets import GooglePointFieldWidget

from api.route.models import Route


class RouteAdminForm(ModelForm):
    class Meta:
        model = Route

        fields = "__all__"
        widgets = {
            'coordinates': GooglePointFieldWidget(settings={"GooglePointFieldWidget": (("zoom", 1),)}),
        }
