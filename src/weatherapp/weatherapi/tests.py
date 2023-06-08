from django.test import TestCase, Client
from django.urls import reverse

class WeatherAppTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_weather_info_success(self):
        url = reverse('weather')
        data = {'city': 'London', 'country': 'UK'}
        response = self.client.post(url, data)

        self.assertEqual(response.status_code, 200)
        self.assertTrue('success' in response.json())
        self.assertTrue('temperature' in response.json())
        self.assertTrue('humidity' in response.json())
        self.assertTrue('wind_speed' in response.json())
        self.assertTrue('weather_description' in response.json())

    def test_weather_info_invalid_city_country(self):
        url = reverse('weather')
        data = {'city': 'InvalidCity', 'country': 'InvalidCountry'}
        response = self.client.post(url, data)

        self.assertEqual(response.status_code, 400)
        self.assertTrue('error' in response.json())

    def test_weather_info_invalid_request_method(self):
        url = reverse('weather')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 405)