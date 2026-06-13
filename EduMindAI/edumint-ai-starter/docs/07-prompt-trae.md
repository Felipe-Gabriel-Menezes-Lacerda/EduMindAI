# Prompt Mestre para usar no Trae

Copie e cole este prompt no Trae dentro da pasta do projeto.

```txt
Você é um desenvolvedor sênior full stack. Monte e finalize o projeto EduMint AI neste workspace.

Contexto do produto:
EduMint AI é uma plataforma web para alunos do 5º ao 7º ano do Ensino Fundamental. Ela diagnostica dificuldades em leitura, interpretação de enunciados, divisão, frações e problemas matemáticos, gera trilhas personalizadas de recomposição e possui um módulo gamificado chamado EduMint Quest, onde o professor cria gincanas com IA.

Stack obrigatória:
- Front-end: Angular com SCSS.
- Back-end: ASP.NET Core MVC com Controllers REST.
- Banco: Firebase Firestore.
- Autenticação: preparar estrutura para Firebase Authentication ou JWT.
- IA: criar um serviço IaService no back-end com implementação mockada inicialmente e pronto para conectar a uma API de IA generativa.

Objetivo:
Criar um MVP funcional, limpo e demonstrável para hackathon.

Módulos obrigatórios:
1. Diagnóstico Inteligente.
2. Trilhas de Recomposição.
3. Dashboard do Professor.
4. EduMint Quest.
5. Tutor IA.

Front-end Angular:
Criar rotas e telas:
- /login
- /aluno/dashboard
- /aluno/diagnostico
- /aluno/trilha
- /professor/dashboard
- /professor/quest/criar
- /aluno/quest/missao

Criar componentes reutilizáveis:
- card
- progress-bar
- badge
- sidebar
- topbar
- stat-card
- empty-state

Criar identidade visual:
- Verde menta como cor primária.
- Azul escuro/navy como cor institucional.
- Fundo branco/cinza claro.
- Cards arredondados.
- SCSS organizado com variables, layout, cards e buttons.

Back-end ASP.NET Core MVC:
Criar Controllers:
- DiagnosticosController
- TrilhasController
- DashboardController
- GincanasController
- MissoesController
- RankingController
- TutorController

Criar Services:
- FirebaseService
- DiagnosticoService
- TrilhaService
- DashboardService
- GincanaService
- RankingService
- IaService

Criar Models/DTOs:
- Usuario
- Aluno
- Professor
- Turma
- Questao
- RespostaAluno
- Diagnostico
- ResultadoDiagnostico
- TrilhaAprendizagem
- Gincana
- Missao
- Equipe
- Participacao
- Ranking
- Medalha

Regras de diagnóstico:
- 0 a 49%: Reforço básico.
- 50 a 69%: Em desenvolvimento.
- 70 a 89%: Adequado.
- 90 a 100%: Avançado.

Tipos de erro:
- Erro de interpretação.
- Erro de cálculo.
- Erro conceitual.
- Erro por falta de base.
- Erro por escolha incorreta da operação.

EduMint Quest:
O professor deve informar turma, disciplina, conteúdo, habilidade, tema, formato e duração.
A IA deve gerar uma prévia com título, narrativa, 5 missões, pontos e premiações.
O professor deve revisar e publicar.
O aluno deve ver missão, progresso, pontos, equipe, ranking e medalhas.

Firestore:
Preparar coleções:
usuarios, alunos, professores, turmas, habilidades, questoes, diagnosticos, respostas, trilhas, interacoesIa, gincanas, missoes, equipes, participacoes, rankings, medalhas.

Importante:
- Primeiro faça o projeto rodar com dados mockados.
- Depois conecte ao Firestore.
- Não exponha chaves no front-end.
- Mantenha o professor no controle das gincanas geradas pela IA.
- Priorize telas bonitas e fluxo demonstrável.

Entrega esperada:
- Código organizado.
- README atualizado.
- Instruções de execução.
- Dados mockados para demo.
- Sem erros de build.
```
