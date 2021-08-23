# Backend
Backend desenvolvido com o **Python** (Versão 3.9.2)
## Dependências
- Python
- [Django](https://github.com/d-napoli/tinnova-backend-test/tree/main/5-Cars-API/back-end#download-do-django)
- [Django Rest Framework](https://github.com/d-napoli/tinnova-backend-test/tree/main/5-Cars-API/back-end#download-do-django-rest-framework)
## Como instalar o projeto
Faça download dos arquivos do Github<br>
É sempre recomendado a criação de uma **venv** (Virtual machine)<br>
Nas pastas do projeto já existe uma **venv** que foi utilizada durante o desenvolvimento<br>
Para executar a venv, entre no caminho `./venv/Scripts`<br>
Execute o arquivo **activate.bat** no seu terminal<br>
```batch
activate.bat
```
### Download do Python (3.9.2)
Acesse o seguinte [link](https://www.python.org/downloads/) e siga as instruções fornecidas pelo wizard.<br>
### Porque o Django?
Django é um **Framework** de alto nível para a linguagem de programação Python. Foi desenvolvido para realizarmos desenvolvimento rápido, pragmático e limpo.<br>
Seu foco é **produtividade, entrega rápida e escalável.**<br>
Além de todos esses fatores, possui um **painel de admin** nativo para suas aplicações.
### Download do Django
Dentro da nossa virtual machine (**venv**), precisamos instalar o **Django**.<br>
Assim como praticamente todos os packages do Python, vamos utilizar o **Pip** (Python package index).<br>
```batch
pip install Django
```
### Download do Django Rest Framework
Dentro da nossa virtual machine (**venv**), precisamos instalar o **Django Rest Framework**.<br>
```batch
pip install djangorestframework
```
Em caso de dúvidas, segue [link](https://www.django-rest-framework.org/) para a documentação oficial do **Rest Framework**<br>
### Executando o projeto
Após ter instalado as dependências citadas acima.<br>
Dentro da raiz da pasta `backend`, execute o seguinte comando:
```batch
python manage.py runserver
```
Se tudo estiver certo, a aplicação irá inicializar no caminho padrão `http://localhost:8000`<br>
### Acessar o painel de Admin do Django
O Django nativamente possui um painel de administrador. Para acessá-lo, é necessário ter credenciais de superuser.<br>
Para criar um **superuser**, basta rodar o seguinte comando na raiz da pasta `backend`:
```batch
python manage.py createsuperuser
```
Siga o passo a passo que o terminal irá mostrar.<br>
Em caso de dúvidas, segue [link](https://docs.djangoproject.com/en/1.8/intro/tutorial02/) da doc oficial do **Django**