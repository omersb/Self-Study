from django.urls import reverse
from django.contrib.auth.models import User

from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate

from flight.views import FlightView
from flight.models import Flight


class FlightTestCase(APITestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.flight = Flight.objects.create(
            flight_number='123ABC',
            operation_airlines='THY',
            departure_city='Adana',
            arrival_city='Ankara',
            date_of_departure='2023-01-08',
            etd='08:35:13',
        )
        self.user = User.objects.create_user(
            username='admin',
            password='Aa654321*'
        )

    def test_flight_lis_as_non_auth_user(self):
        request = self.factory.get('/flight/flights/')
        # print(reverse('flights-list'))
        response = FlightView.as_view({'get': 'list'})(request)
        print(response)
        self.assertEqual(response.status_code, 200)
        self.assertNotContains(response, 'reservation')

    def test_flight_list_as_staff_user(self):
        request = self.factory.get('/flight/flights/')
        self.user.is_staff = True
        self.user.save()
        force_authenticate(request, user=self.user)
        request.user = self.user
        response = FlightView.as_view({'get': 'list'})(request)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'reservation')
