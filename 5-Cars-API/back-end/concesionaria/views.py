from rest_framework import viewsets, generics
from concesionaria.models import Carro
from concesionaria.serializer import CarroSerializer, MarcasSerializer
from django.db.models import Count

class CarrosViewSet(viewsets.ModelViewSet):
    """Exibindo todos os carros"""
    queryset = Carro.objects.all()
    serializer_class = CarroSerializer

class ListaVeiculo(generics.ListAPIView):
    """Lista veículos por filtro"""
    def get_queryset(self):
        queryset = Carro.objects.filter(veiculo = self.kwargs['q'])
        return queryset

    serializer_class = CarroSerializer

class AgruparFabricantes(generics.ListAPIView):
    """Agrupa a quantidade de veículos por fabricantes"""
    # queryset = Carro.objects.values('marca').annotate(total=Count('id'))
    
    serializer_class = MarcasSerializer

    def get_queryset(self):
        queryset = Carro.objects.values('marca').annotate(total=Count('id'))
        print(queryset)
        return queryset