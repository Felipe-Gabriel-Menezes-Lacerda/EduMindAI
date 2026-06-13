# API prevista

Base URL local sugerida:

```txt
http://localhost:5071/api
```

## Diagnóstico

### POST /api/diagnosticos/responder

Envia respostas do aluno e retorna resultado.

Request:

```json
{
  "alunoId": "aluno_001",
  "turmaId": "turma_6A",
  "respostas": [
    { "questaoId": "q1", "resposta": "D" }
  ]
}
```

Response:

```json
{
  "diagnosticoId": "diag_001",
  "desempenhoGeral": 48,
  "status": "Reforço básico",
  "habilidadesCriticas": ["Divisão"],
  "tipoErroPredominante": "Erro de cálculo"
}
```

## Trilhas

### POST /api/trilhas/gerar

Gera trilha personalizada com base no diagnóstico.

## Dashboard

### GET /api/dashboard/turma/{turmaId}

Retorna KPIs, mapa de defasagem e sugestão pedagógica.

## EduMint Quest

### POST /api/gincanas/gerar-preview

Gera prévia de gincana com IA.

### POST /api/gincanas/publicar

Publica gincana para a turma.

### GET /api/gincanas/{gincanaId}/ranking

Retorna ranking individual, por equipe e por evolução.
