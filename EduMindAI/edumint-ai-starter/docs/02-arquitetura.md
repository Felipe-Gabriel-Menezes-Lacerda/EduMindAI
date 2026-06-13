# Arquitetura

## Stack

- Angular + SCSS no front-end.
- ASP.NET Core MVC no back-end.
- Firebase Firestore como banco de dados NoSQL.
- Firebase Authentication ou JWT para autenticação.
- Serviço de IA generativa consumido pelo back-end.

## Visão lógica

```txt
Usuário
  ↓
Angular + SCSS
  ↓ HTTP/REST
ASP.NET Core MVC Controllers
  ↓
Services de regra de negócio
  ↓
Firestore + Serviço de IA
```

## Fluxo principal

1. Aluno acessa a plataforma.
2. Realiza diagnóstico.
3. Back-end corrige respostas e identifica tipo de erro.
4. Resultado é salvo no Firestore.
5. IA gera trilha personalizada.
6. Professor visualiza dashboard com mapa de defasagem.
7. Professor cria gincanas no EduMint Quest.
8. Alunos participam, pontuam e recebem medalhas.

## Decisão arquitetural

O EduMint Quest deve ser um módulo separado para permitir evolução posterior sem alterar o núcleo de diagnóstico e trilhas.
