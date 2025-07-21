📋 API Tasks

API REST para gerenciamento de tarefas.
🚀 Base URL

http://localhost:4000/tasks
📚 Endpoints
✅ Listar todas as tarefas

    GET /tasks

Retorna todas as tarefas cadastradas.
🔍 Buscar tarefa por ID

    GET /tasks/:id

Retorna a tarefa correspondente ao ID.

Exemplo de resposta:

{
  "id": "uuid",
  "name": "Comprar pão",
  "description": "Padaria",
  "status": "pending",
  "priority": "normal",
  "createdAt": "2025-07-17T10:00:00Z",
  "dueDate": "indeterminate"
}

📝 Criar uma nova tarefa

    POST /tasks

Corpo da requisição:

{
  "name": "Estudar Node.js",
  "description": "Aprender Express e PostgreSQL",
  "status": "pending",
  "priority": "high",
  "dueDate": "2025-07-25T12:00:00Z"
}

Valores possíveis:

    status: "pending" ou "done" (padrão: "pending")

    priority: "low", "normal", "high" (padrão: "normal")

    dueDate: ISO 8601 ou "indeterminate" (padrão: "indeterminate")

🔄 Editar uma tarefa

    PUT /tasks/:id

Atualiza campos parciais da tarefa.

Exemplo:

{
  "name": "Novo nome",
  "priority": "low",
  "dueDate": "indeterminate"
}

🗑️ Deletar uma tarefa

    DELETE /tasks/:id

Remove a tarefa do sistema.
🖋️ Notas para front-end

    IDs são UUID.

    Datas devem estar em ISO 8601 UTC: "2025-07-21T13:25:20.570Z".

    Campos obrigatórios no create: name.

    createdAt é gerado automaticamente.

🧪 Exemplo com fetch

fetch('http://localhost:4000/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Estudar React',
    priority: 'high',
    dueDate: 'indeterminate'
  })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

👨‍💻 Contribuindo

Sinta-se à vontade para abrir uma issue com dúvidas ou sugestões.