# Fatorial
O **fatorial** é uma operação muito importante para o estudo e desenvolvimento da análise combinatória. Na matemática o número seguido do símbolo de exclamação **(!)** é conhecido como fatorial, por exemplo, x! (x fatorial).<br>

Conhecemos como fatorial de um número natural a multiplicação desse número por seus antecessores com exceção do zero, ou seja:<br>
`n! = n · (n-1) · (n-2) … 3 · 2 · 1`

## Exemplos:
- 4! =4 · 3 · 2 · 1 = 24
- 5! = 5 · 4 · 3 · 2 · 1= 120
- 6! = 6 · 5 · 4 · 3 · 2 · 1 = 720
- 7! = 7· 6 · 5 · 4 · 3 · 2 · 1 = 5040
<br>
Fonte [Brasil Escola](https://brasilescola.uol.com.br/matematica/fatorial.htm)

## Realização do código
O algoritmo recebe um parâmetro `n`, caso não informado é utilizado o valor **5**<br>
Fiz um loop decrescente até o valor chegar à 0, e dentro do loop um ternário fazendo a lógica de como o montante total deve ser incrementado.

# Como executar o código
Para executar o código, é necessário ter o Python instalado.<br>
Foi utilizado o Python 3.9.2 para a codificação<br><br>
```python
python main.py
```