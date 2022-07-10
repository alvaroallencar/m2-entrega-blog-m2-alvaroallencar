# URL Base

`https://blog-m2.herokuapp.com`

## **Endpoints**

A API tem um total de 8 endpoints<br/>

## Rotas que não precisam de autenticação

<h2 align ='center'> USER </h2>

`POST /users/register - FORMATO DA REQUISIÇÃO`

Rota para realizar o cadastro na API.

```json
{
  "username": "teste",
  "email": "teste@kenzie.com.br",
  "avatarUrl": "https://github.com/phmc99.png",
  "password": "Teste123"
}
```

`FORMATO DA RESPOSTA - 201`

```json
{
  "id": 1,
  "email": "teste@kenzie.com.br",
  "username": "teste",
  "avatarUrl": "https://github.com/phmc99.png"
}
```

`POST /users/login - FORMATO DA REQUISIÇÃO`

Rota para fazer o login na API, e onde será recebido o token.

```json
{
  "email": "teste@kenzie.com.br",
  "password": "Teste123"
}
```

`FORMATO DA RESPOSTA - 200`

```json
{
	"userId": 2,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlIiwiaWF0IjoxNjU3MDMwMjU3LCJleHAiOjE2NTcwNDEwNTd9.9bDVMdmHjxcYgCynSMaDrQxApfSBey0M3ffYs_m42MY"
}
```

## Rotas que precisam de autenticação

Rotas que necessitam de autenticação deverão possuir no cabeçalho da requisição o campo "Authorization" com o token obtido no login.

> Authorization: Bearer {token}

<h2 align ='center'> USERS </h2>

`GET /users/{id}`

Rota para buscar as informações de um usuário específico, utilizando seu id.

`FORMATO DA RESPOSTA - 200`

```json
{
  "id": 1,
  "email": "teste@kenzie.com.br",
  "username": "teste",
  "avatarUrl": "https://github.com/phmc99.png",
  "createdAt": "2022-07-01T00:00:00.000Z"
}
```

<h2 align ='center'> POSTS </h2>

`GET /posts?page=1`

Rota para buscar as postagens que existem na API. As páginas podem ser alteradas colocando outro numero na url.

`FORMATO DA RESPOSTA - 200`

```json
{
  "totalPages": 1,
  "nextPage": null,
  "previousPage": null,
  "data": [
    {
      "id": 2,
      "content": "content",
      "createdAt": "2022-07-01T00:00:00.000Z",
      "updatedAt": null,
      "user": {
        "id": 1,
        "username": "teste",
        "avatarUrl": "https://github.com/phmc99.png"
      }
    },
    {
      "id": 1,
      "content": "content",
      "createdAt": "2022-07-01T00:00:00.000Z",
      "updatedAt": null,
      "user": {
        "id": 1,
        "username": "teste",
        "avatarUrl": "https://github.com/phmc99.png"
      }
    }
  ]
}
```

`GET /posts/{id} - 200`

Rota para buscar as informações de um post específico, utilizando seu id.

```json
{
  "id": 1,
  "content": "content",
  "createdAt": "2022-07-01T00:00:00.000Z",
  "updatedAt": null,
  "user": {
    "id": 1,
    "username": "teste",
    "avatarUrl": "https://github.com/phmc99.png"
  }
}
```

`POST /posts - FORMATO DA REQUISIÇÃO`

Rota para fazer a criação de novos posts.

```json
{
  "content": "content"
}
```

`FORMATO DA RESPOSTA - 201`

```json
{
  "id": 2,
  "content": "content",
  "createdAt": "2022-07-01T00:00:00.000Z",
  "user": {
    "id": 1,
    "username": "teste",
    "avatarUrl": "https://github.com/phmc99.png"
  }
}
```

`PATCH /posts/{id} - FORMATO DA REQUISIÇÃO`

Rota para alterar o conteúdo de um post, utilizando seu id.

```json
{
  "content": "new content"
}
```

`FORMATO DA RESPOSTA - 200`

```json
{
  "id": 2,
  "content": "new content",
  "createdAt": "2022-07-01T00:00:00.000Z",
  "updatedAt": "2022-07-01T00:00:00.000Z",
  "user": {
    "id": 1,
    "username": "teste",
    "avatarUrl": "https://github.com/phmc99.png"
  }
}
```

`DELETE /posts/{id} - 204`

`SEM RESPOSTA`

Rota para deletar um post, utilizando seu id.
