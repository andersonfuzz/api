app
router
controller
Repository-Lida com o banco
Model
Db
###Nome do arquivo docker-compose.yml

###Conteudo do compos:
version: '3.8'

services:
  db:
    image: postgres:15
    container_name: postgres_tasksdb
    restart: always
    environment:
      POSTGRES_USER: andersonfuzz
      POSTGRES_PASSWORD: An@1haunted0
      POSTGRES_DB: tasksdb
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:

###Subir banco
docker compose up -d

###Teste a conexão
docker exec -it postgres_tasksdb psql -U andersonfuzz -d tasksdb

###Quando terminar, você pode checar se a tabela existe com:
\d tasks
###E para listar as tarefas atuais (deve estar vazia por enquanto):
SELECT * FROM tasks;

###Instalar driver Postgres no Node.js
npm install pg
