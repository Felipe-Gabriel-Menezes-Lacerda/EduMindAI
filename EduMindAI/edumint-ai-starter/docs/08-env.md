# Variáveis de Ambiente

## Back-end

Copie `appsettings.example.json` para `appsettings.Development.json`.

```json
{
  "Firebase": {
    "ProjectId": "SEU_PROJECT_ID",
    "CredentialPath": "./firebase-service-account.json"
  },
  "Ai": {
    "Provider": "mock",
    "BaseUrl": "",
    "ApiKey": ""
  },
  "AllowedOrigins": [
    "http://localhost:4200"
  ]
}
```

## Front-end

Arquivo sugerido: `src/environments/environment.ts`

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5071/api'
};
```

## Segurança

- Nunca suba `firebase-service-account.json`.
- Nunca coloque chave de IA no Angular.
- Toda chamada de IA deve passar pelo back-end.
