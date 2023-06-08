
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from apicredentials import API_KEY
import requests

class WeatherView(View):
    """
    View class for retrieving weather information using OpenWeatherMap API.
    """
    template = "layout/weather.html"
    
    def get(self, request):
        return render(request, self.template)

    def post(self, request):
        city = request.POST.get('city','')
        country = request.POST.get('country','')

        api_key = API_KEY
        weather_url = f'https://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={api_key}&units=metric'
        response = requests.get(weather_url).json()

        if if response['cod'] == 200 and country != '' and city != '':
            # Get information
            temperature = response['main'].get('temp')
            humidity = response['main'].get('humidity')
            wind_speed = response['wind'].get('speed')
            weather_description = response['weather'][0].get('description')
            weather_icon = response['weather'][0].get('icon')
            timezone = response.get('timezone')

            # icon URL 
            icon_url = f'http://openweathermap.org/img/w/{weather_icon}.png'


            data = {
                'success': True,
                'city': city,
                'country': country,
                'temperature': temperature,
                'humidity': humidity,
                'wind_speed': wind_speed,
                'weather_description': weather_description,
                'weather_icon': icon_url,
                'timezone': timezone
            }

            return JsonResponse(data)
        elif response['cod'] == 401:
            error_message = 'Unauthorized. Invalid API token'
            return JsonResponse({'error': error_message}, status=401)
        elif response['cod'] == 404:
            error_message = 'Data not found for the specified parameters'
            return JsonResponse({'error': error_message}, status=404)
        elif response['cod'] == 429:
            error_message = 'Too many requests. Quota exceeded'
            return JsonResponse({'error': error_message}, status=429)
        elif int(response['cod']) >= 500:
            error_message = 'Unexpected error'
            return JsonResponse({'error': error_message}, status=500)
        else:
            error_message = 'Invalid city or country'
            return JsonResponse({'error': error_message}, status=400)
