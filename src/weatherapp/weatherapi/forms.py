from django import forms

class WeatherForm(forms.Form):
    city = forms.CharField(label='City')
    country = forms.CharField(label='Country')