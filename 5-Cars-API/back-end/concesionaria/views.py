from rest_framework import viewsets, generics
from concesionaria.models import Carro
from concesionaria.serializer import CarroSerializer

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