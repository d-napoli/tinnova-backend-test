# Multiplos
Algoritmo para calcular a soma dos múltiplos de **3** ou **5**, a partir de 1 até um valor N especificado pelo usuário.
## Exemplo:
### N = 10 (Vamos de 1 até 10 então)
- 1 é múltiplo de 3 ou 5? ❌
- 2 é múltiplo de 3 ou 5? ❌
- 3 é múltiplo de 3 ou 5? ✅ (total = 3)
- 4 é múltiplo de 3 ou 5? ❌
- 5 é múltiplo de 3 ou 5? ✅ (total = 8 [5 + 3])
- 6 é múltiplo de 3 ou 5? ✅ (total = 14 [5 + 3 + 6])
- 7 é múltiplo de 3 ou 5? ❌
- 8 é múltiplo de 3 ou 5? ❌
- 9 é múltiplo de 3 ou 5? ✅ (total = 23 [5 + 3 + 6 + 9])
<br>
### Resposta: 23

## Realização do algoritmo
Para fazer o algoritmo foi inicializado um valor ``i`` como sendo **1**, esse ``i`` é incrementado enquanto é menor do que o valor ``N`` informado pelo usuário.<br>
Dentro do loop, a cada execução, fazemos um mod `%` para checar se o resto da divisão de ```i``` por 3 ou 5 é **0**, caso seja, temos um número múltiplo.<br>
Quando encontramos um múltiplo, basta incrementar o total.<br>

# Como executar o código
Para executar o código, é necessário ter o Python instalado.<br>
Foi utilizado o Python 3.9.2 para a codificação<br><br>
```python
python main.py
```
