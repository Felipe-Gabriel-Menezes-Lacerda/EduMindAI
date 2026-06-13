# Modelo de Dados — Firestore

## Coleções principais

```txt
usuarios
alunos
professores
turmas
habilidades
questoes
diagnosticos
respostas
trilhas
interacoesIa
gincanas
missoes
equipes
participacoes
rankings
medalhas
```

## usuarios/{usuarioId}

```json
{
  "nome": "Ana Souza",
  "email": "ana@email.com",
  "perfil": "aluno",
  "turmaId": "turma_6A",
  "criadoEm": "2026-06-13T10:00:00Z"
}
```

## diagnosticos/{diagnosticoId}

```json
{
  "alunoId": "aluno_001",
  "turmaId": "turma_6A",
  "data": "2026-06-13T10:00:00Z",
  "desempenhoGeral": 45,
  "status": "Reforço básico",
  "habilidadesCriticas": ["Divisão", "Interpretação de enunciados"],
  "tipoErroPredominante": "Escolha incorreta da operação"
}
```

## trilhas/{trilhaId}

```json
{
  "alunoId": "aluno_001",
  "diagnosticoId": "diag_001",
  "titulo": "Missão: entender problemas com divisão",
  "nivel": "Reforço básico",
  "habilidadesTrabalhadas": ["Divisão", "Interpretação de enunciados"],
  "atividades": [
    { "ordem": 1, "tipo": "explicacao", "titulo": "Entendendo o problema" },
    { "ordem": 2, "tipo": "exemplo_guiado", "titulo": "Dividindo igualmente" },
    { "ordem": 3, "tipo": "quiz", "titulo": "Pratique com desafios" }
  ],
  "criadaPorIa": true
}
```

## gincanas/{gincanaId}

```json
{
  "titulo": "A Batalha dos Fragmentos Perdidos",
  "turmaId": "turma_6A",
  "professorId": "prof_001",
  "disciplina": "Matemática",
  "conteudo": "Frações",
  "habilidade": "Comparar frações",
  "tema": "Anime aventura",
  "formato": "equipes",
  "dataInicio": "2026-06-13T10:00:00Z",
  "dataFim": "2026-06-20T10:00:00Z",
  "status": "rascunho",
  "criadaPorIa": true
}
```
