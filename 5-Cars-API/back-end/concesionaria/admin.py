from django.contrib import admin
from concesionaria.models import Carro

class Carros(admin.ModelAdmin):
    list_display = ('id', 'veiculo', 'marca')
    list_display_links = ('id', 'veiculo')

admin.site.register(Carro, Carros)