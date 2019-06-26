# Desafio 01

Aplicação desevolvida utilizando o framework Express.

## Rotas disponiveis

- `POST /projects`: Rota para cadastar um novo projeto, recebe o `id` e o `title` via JSON.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: Rota para alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: Rota para deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota para armazenar uma nova tarefa deve receber um campo `title` e o campo `id` referente a qual projeto é a tarefa;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```
