# EduMint AI

Plataforma web para diagnóstico, recomposição e engajamento da aprendizagem no Ensino Fundamental, com foco em alunos do 5º ao 7º ano.

## Stack

- Front-end: Angular 18 + SCSS
- Back-end: ASP.NET Core 8 MVC/API com Controllers REST
- Banco: Firebase Firestore com modo mock habilitado por padrão para demo
- IA: `IaService` mockado e pronto para trocar por provedor real

## MVP implementado

- Tela inicial/login alinhada ao mockup oficial
- Dashboard do aluno com diagnóstico, tutor IA, trilha e próxima missão
- Tela de diagnóstico com correção automática
- Tela de trilha personalizada de recomposição
- Dashboard do professor com KPIs, mapa de defasagem e sugestão pedagógica
- Criação de gincana com IA e prévia publicável
- Missão gamificada com questão, ranking, equipe e medalhas

## Rotas do front-end

- `/login`
- `/aluno/dashboard`
- `/aluno/diagnostico`
- `/aluno/trilha`
- `/professor/dashboard`
- `/professor/quest/criar`
- `/aluno/quest/missao`

## Endpoints principais

- `GET /api/dashboard/aluno/{alunoId}`
- `GET /api/dashboard/turma/{turmaId}`
- `GET /api/diagnosticos/questoes`
- `POST /api/diagnosticos/responder`
- `POST /api/trilhas/gerar`
- `POST /api/gincanas/gerar-preview`
- `POST /api/gincanas/publicar`
- `GET /api/missoes/{gincanaId}/aluno/{alunoId}`
- `POST /api/missoes/responder`
- `GET /api/rankings/{gincanaId}`
- `POST /api/tutor/perguntar`

## Estrutura

```txt
edumint-ai-starter/
├── backend/EduMintAI.Api/          # API ASP.NET Core
├── frontend/edumint-ai-web/        # Aplicação Angular
├── docs/                           # Documentação do projeto
├── scripts/                        # Scripts auxiliares
└── assets/mockups/                 # Referência visual oficial
```

## Execução

### Back-end

```bash
cd backend/EduMintAI.Api
dotnet restore
dotnet run
```

- Base local: `http://localhost:5071`
- Swagger: `http://localhost:5071/swagger`

### Front-end

```bash
cd frontend/edumint-ai-web
npm install --include=dev
npm start
```

- App local: `http://localhost:4200`

### Builds validados

```bash
cd backend/EduMintAI.Api
dotnet build

cd frontend/edumint-ai-web
npm run build
```

## Firebase

O projeto está configurado para funcionar primeiro com dados mockados. Para ligar o Firestore real:

1. Crie um projeto no Firebase.
2. Habilite o Firestore.
3. Gere uma chave de conta de serviço.
4. Copie `backend/EduMintAI.Api/appsettings.example.json` para `appsettings.Development.json`.
5. Ajuste os campos abaixo:

```json
{
  "Firebase": {
    "ProjectId": "SEU_PROJECT_ID",
    "CredentialPath": "./firebase-service-account.json",
    "UseMockRepository": false
  }
}
```

Nunca envie a chave real para o repositório.

## Referência de implementação

- Diretriz principal: `docs/07-prompt-trae.md`
- UX funcional: `docs/11-ux-telas.md`
- Mockups oficiais: `assets/mockups`
