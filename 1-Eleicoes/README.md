# 1 - Eleições
De acordo com o PDF de instruções, essa questão tinha como objetivo desenvolver um algoritmo em **Python** utilizando as praticas de **POO (Programação Orientada a Objetos)**.
<br>
<br>
A classe em questão tinha como objetivo principal calcular três métricas relacionadas a uma determinada eleição:

 1. Percentual de votos válidos
 2. Percentual de votos em branco
 3. Percentual de votos nulos
<br>
As variáveis com quantidade de votos para cada categoria são fixas, **conforme o PDF**. Elas são dividias da seguinte forma:
<br>
Quantidade total de votos: **1000**<br>
Quantidade de votos válidos: **800**<br>
Quantidade de votos em branco: **150**<br>
Quantidade de votos nulos: **50**<br>
O cálculo para retornar o percentual é sempre o mesmo, variando apenas qual o tipo de voto.<br>

```python
(tipo_voto * 100) / total_votos
```
