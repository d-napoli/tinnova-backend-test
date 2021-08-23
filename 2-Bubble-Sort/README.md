# 2 - Bubble Sort
Bubble Sort é um dos algoritmos de ordenação mais simples (se não o mais simples).<br>
Funciona atravez de um loop, comparando sempre dois elementos. Se um dos dois elementos for maior que o outro, realiza a troca entre eles, mantendo a ordenação correta.<br>

## Exemplo de Bubble Sort


### Primeira Execução
( **5 1** 4 2 8 ) → ( **1 5** 4 2 8 ) [Troca, já que 5 é maior que 1]<br>
( 1 **5 4** 2 8 ) → ( 1 **4 5** 2 8 ) [Troca, já que 5 é maior que 4]<br>
( 1 4 **5 2** 8 ) → ( 1 4 **2 5** 8 ) [Troca, já que 5 é maior que 2]<br>
( 1 4 2 **5 8** ) → ( 1 4 2 **5 8** )<br>

### Segunda execução
( **1 4** 2 5 8 ) → ( **1 4** 2 5 8 )<br>
( 1 **4 2** 5 8 ) → ( 1 **2 4** 5 8 ) [Troca, já que 4 é maior que 2]<br>
( 1 2 **4 5** 8 ) → ( 1 2 **4 5** 8 )<br>
( 1 2 4 **5 8** ) → ( 1 2 4 **5 8** )<br>

### Terceira execução
( **1 2** 4 5 8 ) → ( **1 2** 4 5 8 )<br>
( 1 **2 4** 5 8 ) → ( 1 **2 4** 5 8 )<br>
( 1 2 **4 5** 8 ) → ( 1 2 **4 5** 8 )<br>
( 1 2 4 **5 8** ) → ( 1 2 4 **5 8** )<br>

#### Array ordenado ☺️

# Como executar o código
Para executar o código, é necessário ter o Python instalado.<br>
Foi utilizado o Python 3.9.2 para a codificação<br><br>
```python
python main.py
```