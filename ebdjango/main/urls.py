from django.urls import path
from main.views import *

urlpatterns = [
    path('', home, name=''),
    path('about/', about, name='about'),
    path('portfolio/', portfolio, name='portfolio'),
    path('contact/', contact, name='contact'),
    path('thanks/', thanks, name='thanks'),
]
