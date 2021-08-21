from rest_framework import serializers
from concesionaria.models import Carro

class CarroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carro
        fields = ['id', 'veiculo', 'marca', 'ano', 'descricao', 'vendido']