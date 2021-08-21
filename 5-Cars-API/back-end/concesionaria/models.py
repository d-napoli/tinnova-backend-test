from django.db import models
from datetime import datetime

class Carro(models.Model):
    veiculo = models.CharField(max_length = 200)
    marca = models.CharField(max_length = 200)
    ano = models.IntegerField()
    descricao = models.TextField()
    vendido = models.BooleanField()
    created = models.DateTimeField(default = datetime.now, blank = True)
    updated = models.DateTimeField(default = datetime.now, blank = True)

    def __str__(self):
        return self.veiculo