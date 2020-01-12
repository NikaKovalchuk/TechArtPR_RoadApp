from django.forms import ModelForm
from mapwidgets import GooglePointFieldWidget
from api.models import Location


class LocationAdminForm(ModelForm):
    class Meta:
        model = Location
        fields = "__all__"
        widgets = {
            'coordinates': GooglePointFieldWidget(settings={"GooglePointFieldWidget": (("zoom", 15),)}),
        }
