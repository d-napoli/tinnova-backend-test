from django.urls.conf import include
from concesionaria.models import Carro
from django.contrib import admin
from django.urls import path
from concesionaria.views import CarrosViewSet, ListaVeiculo
from rest_framework import routers

router = routers.DefaultRouter()
router.register('veiculos', CarrosViewSet, basename='Veiculos')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('veiculos/find/<str:q>', ListaVeiculo.as_view()),
    path('', include(router.urls))
]
