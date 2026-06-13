import { CriarGincanaRequest, DashboardAluno, DashboardProfessor, Gincana, GincanaPreview, MissaoAluno, QuestaoDiagnostico, RankingItem, ResultadoDiagnostico, TrilhaAprendizagem, TrilhaRequest } from './models';

export const loginBeneficios = [
  { titulo: 'Diagnóstico inteligente', descricao: 'Avaliações adaptativas identificam conhecimentos e habilidades de cada aluno.', sigla: 'IA' },
  { titulo: 'Trilhas personalizadas', descricao: 'Atividades na medida certa para recompor aprendizagens e avançar com confiança.', sigla: 'TR' },
  { titulo: 'Gincanas com IA', descricao: 'Missões, desafios e recompensas que engajam e motivam todos os dias.', sigla: 'QT' }
];

export const alunoDashboardMock: DashboardAluno = {
  nome: 'Ana', saudacao: 'Olá, Ana!', resumo: 'Que bom te ver por aqui. Continue sua jornada e alcance novas conquistas.', nivelAtual: 3, xpAtual: 250, xpMeta: 400,
  stats: [
    { titulo: 'Nível atual', valor: 'Nível 3', detalhe: 'Aprendiz em evolução', icone: 'NV', tonalidade: 'mint', progresso: 63 },
    { titulo: 'Pontos', valor: '1.250', detalhe: '+120 esta semana', icone: 'XP', tonalidade: 'purple' },
    { titulo: 'Missões concluídas', valor: '12', detalhe: 'de 20 planejadas', icone: 'OK', tonalidade: 'blue', progresso: 60 },
    { titulo: 'Tempo de estudo', valor: '5h 30m', detalhe: 'esta semana', icone: 'TM', tonalidade: 'amber' }
  ],
  diagnostico: [
    { titulo: 'Interpretação de enunciados', percentual: 82, status: 'Muito bem', descricao: 'Você demonstra ótima compreensão dos problemas.', icone: 'LE', tonalidade: 'mint' },
    { titulo: 'Divisão', percentual: 48, status: 'Ponto de atenção', descricao: 'Essa habilidade precisa de mais prática. Vamos melhorar juntos!', icone: 'DV', tonalidade: 'red' },
    { titulo: 'Frações', percentual: 76, status: 'Bom progresso', descricao: 'Você está no caminho certo. Continue praticando.', icone: 'FR', tonalidade: 'mint' }
  ],
  trilha: [
    { ordem: 1, titulo: 'Revisar divisão', descricao: 'Reforce os conceitos essenciais da divisão.', status: 'concluido' },
    { ordem: 2, titulo: 'Exemplo guiado', descricao: 'Assista a uma explicação com exemplos práticos.', status: 'concluido' },
    { ordem: 3, titulo: 'Praticar com desafios', descricao: 'Resolva exercícios e ganhe pontos.', status: 'atual', acao: 'Continuar' },
    { ordem: 4, titulo: 'Quiz final', descricao: 'Teste seus conhecimentos antes da fase final.', status: 'bloqueado' },
    { ordem: 5, titulo: 'Conquista da etapa', descricao: 'Complete tudo e receba sua recompensa.', status: 'bloqueado' }
  ],
  tutor: { saudacao: 'Oi, Ana!', mensagem: 'Estou aqui para ajudar a aprender cada vez mais. Em que posso ajudar hoje?', acao: 'Conversar com o tutor' },
  proximaMissao: { titulo: 'Divisão na prática', descricao: 'Resolva 5 desafios sobre divisão e ganhe 80 pontos.', progresso: 2, totalEtapas: 5, recompensa: '+80 pontos', acao: 'Começar missão' }
};

export const professorDashboardMock: DashboardProfessor = {
  turma: 'Turma 6º Ano A', totalAlunos: 28, alunosAvaliados: 26, mediaTurma: 68, alunosEmAtencao: 9, alunosAvancados: 6,
  mapaDefasagem: { 'Interpretação de enunciados': 42, Divisão: 55, Frações: 63, 'Problemas matemáticos': 78 },
  evolucaoTurma: [
    { rotulo: '05/abr', valor: 48 }, { rotulo: '20/abr', valor: 53 }, { rotulo: '05/mai', valor: 59 }, { rotulo: '20/mai', valor: 62 }, { rotulo: '05/jun', valor: 68 }
  ],
  alunosQuePrecisamDeApoio: [
    { nome: 'João Pedro Silva', mediaGeral: 28, principaisDificuldades: ['Interpretação', 'Divisão'], ultimoDiagnostico: '05/06/2024' },
    { nome: 'Maria Eduarda Lima', mediaGeral: 35, principaisDificuldades: ['Interpretação', 'Frações'], ultimoDiagnostico: '05/06/2024' },
    { nome: 'Lucas Gabriel Santos', mediaGeral: 40, principaisDificuldades: ['Divisão', 'Problemas'], ultimoDiagnostico: '05/06/2024' }
  ],
  sugestaoPedagogica: 'Com base nos resultados, recomendamos priorizar leitura e compreensão de problemas antes de aprofundar cálculos mais complexos.',
  focoPrincipal: 'Interpretação de enunciados',
  acoesSugeridas: ['Aplicar trilha de leitura e compreensão de problemas.', 'Explorar atividades da Quest relacionadas ao tema.', 'Reforçar exemplos práticos no contexto do aluno.'],
  proximosPassos: [{ titulo: 'Diagnóstico de Matemática', data: '18/06/2024' }, { titulo: 'Diagnóstico de Português', data: '25/06/2024' }]
};

export const questoesDiagnosticoMock: QuestaoDiagnostico[] = [
  { id: 'q1', disciplina: 'Matemática', habilidade: 'Divisão', enunciado: 'João tem 24 balas e quer dividir igualmente entre 6 amigos. Quantas balas cada amigo recebe?', alternativas: [{ letra: 'A', texto: '30' }, { letra: 'B', texto: '6' }, { letra: 'C', texto: '5' }, { letra: 'D', texto: '4' }] },
  { id: 'q2', disciplina: 'Matemática', habilidade: 'Frações', enunciado: 'Uma figura foi dividida em 6 partes iguais. 4 partes estão pintadas. Qual fração representa a parte pintada?', alternativas: [{ letra: 'A', texto: '1/6' }, { letra: 'B', texto: '2/6' }, { letra: 'C', texto: '3/6' }, { letra: 'D', texto: '4/6' }] },
  { id: 'q3', disciplina: 'Português', habilidade: 'Interpretação de enunciados', enunciado: 'No problema: "divida igualmente entre os colegas", a palavra igualmente indica qual operação?', alternativas: [{ letra: 'A', texto: 'Somar' }, { letra: 'B', texto: 'Dividir' }, { letra: 'C', texto: 'Multiplicar' }, { letra: 'D', texto: 'Subtrair' }] }
];

export const resultadoDiagnosticoMock: ResultadoDiagnostico = {
  diagnosticoId: 'diag_demo_001', desempenhoGeral: 48, status: 'Reforço básico', habilidadesCriticas: ['Divisão', 'Interpretação de enunciados'], tipoErroPredominante: 'Erro de cálculo', feedback: 'Você precisa reforçar divisão e interpretação de enunciados. Vamos focar em exemplos guiados e prática curta.'
};

export function criarTrilhaMock(request: TrilhaRequest): TrilhaAprendizagem {
  const habilidade = request.habilidadesCriticas[0] ?? 'Divisão';
  return {
    id: 'trilha_demo_001', alunoId: request.alunoId, diagnosticoId: request.diagnosticoId, titulo: `Missão de recomposição: ${habilidade}`, nivel: request.nivel, habilidadesTrabalhadas: request.habilidadesCriticas, criadaPorIa: true,
    atividades: [
      { ordem: 1, tipo: 'explicacao', titulo: `Entendendo ${habilidade}`, descricao: 'Retome os conceitos essenciais com exemplos do cotidiano.' },
      { ordem: 2, tipo: 'exemplo_guiado', titulo: 'Exemplo guiado', descricao: 'Veja como resolver um desafio passo a passo antes de praticar.' },
      { ordem: 3, tipo: 'quiz', titulo: 'Praticar com desafios', descricao: 'Resolva exercícios curtos e receba feedback imediato.' },
      { ordem: 4, tipo: 'validacao', titulo: 'Quiz final', descricao: 'Valide se a habilidade foi recomposta para seguir de nível.' }
    ]
  };
}

export function criarPreviewGincanaMock(request: CriarGincanaRequest): GincanaPreview {
  const titulo = request.disciplina.toLowerCase() === 'história' ? 'A Batalha dos Fragmentos Perdidos' : `O Desafio dos Guardiões de ${request.conteudo}`;
  const gincana: Gincana = {
    id: 'gincana_demo_001', turmaId: request.turmaId, professorId: request.professorId, disciplina: request.disciplina, conteudo: request.conteudo, habilidade: request.habilidade, tema: request.tema, formato: request.formato, titulo,
    narrativa: request.disciplina.toLowerCase() === 'história'
      ? 'Após a queda da Bastilha, fragmentos de documentos mágicos foram espalhados pela França. Sua missão é recuperar as informações, responder desafios e restaurar a história antes que sejam esquecidos para sempre!'
      : `Os guardiões do conhecimento convocaram a turma para uma aventura sobre ${request.conteudo}. Cada missão reforça a habilidade ${request.habilidade}.`,
    status: 'rascunho',
    missoes: [
      { id: 'm1', ordem: 1, titulo: 'A Queda da Bastilha', descricao: 'Responda questões sobre as causas do conteúdo principal.', tipo: 'quiz', pontos: 100 },
      { id: 'm2', ordem: 2, titulo: 'Assembleia dos Estados', descricao: 'Complete desafios colaborativos com foco em interpretação.', tipo: 'colaborativa', pontos: 120 },
      { id: 'm3', ordem: 3, titulo: 'A Declaração dos Direitos', descricao: 'Analise pistas e conecte conceitos ao contexto.', tipo: 'analise', pontos: 120 },
      { id: 'm4', ordem: 4, titulo: 'O Reinado do Terror', descricao: 'Resolva enigmas com maior dificuldade.', tipo: 'desafio', pontos: 130 },
      { id: 'm5', ordem: 5, titulo: 'O Legado da Revolução', descricao: 'Desafio final para consolidar a aprendizagem.', tipo: 'boss', pontos: 180 }
    ],
    premios: [{ posicao: '1º lugar', descricao: 'Medalha de Ouro' }, { posicao: '2º lugar', descricao: 'Medalha de Prata' }, { posicao: '3º lugar', descricao: 'Medalha de Bronze' }]
  };
  return { gincana, pontuacaoTotal: 650, avisoRevisao: 'A IA pode ajustar as missões após a geração. O professor continua no controle antes de publicar.' };
}

export const rankingMock: RankingItem[] = [
  { posicao: 1, nome: 'Equipe Estrela', pontos: 2480, tipo: 'equipe' },
  { posicao: 2, nome: 'Os Gênios da Mente', pontos: 2210, tipo: 'equipe' },
  { posicao: 3, nome: 'Matemágicos', pontos: 1980, tipo: 'equipe' },
  { posicao: 4, nome: 'Fração Riders', pontos: 1640, tipo: 'equipe' },
  { posicao: 5, nome: 'Sabichões', pontos: 1250, tipo: 'equipe' }
];

export const missaoAlunoMock: MissaoAluno = {
  gincanaId: 'gincana_demo_001', titulo: 'Missão 2 - O Desafio das Frações Perdidas', subtitulo: 'EduMint Quest', narrativa: 'Os guardiões das frações precisam da sua ajuda. As peças do mapa foram espalhadas pelo reino e só você pode encontrá-las resolvendo os desafios. Cada acerto aproxima da restauração do mapa e da vitória da sua equipe!', progresso: 60, faseAtual: 'Fase 2 de 5', tempoRestante: '18 min', pontosAtuais: 1250, sequenciaDias: 7, baudeConhecimento: 74,
  desafioAtual: { missaoId: 'm2', indice: 3, total: 10, pergunta: 'Qual fração representa a parte pintada da figura abaixo?', dica: 'Conte quantas partes estão pintadas e quantas partes totais existem!', pontos: 50, alternativaCorreta: 'D', alternativas: [{ id: 'A', rotulo: 'A', texto: '1/6' }, { id: 'B', rotulo: 'B', texto: '2/6' }, { id: 'C', rotulo: 'C', texto: '3/6' }, { id: 'D', rotulo: 'D', texto: '4/6' }] },
  ranking: rankingMock,
  equipe: { nome: 'Sabichões', posicao: 5, pontos: 1250, membros: ['ANA', 'LUC', 'MIA', 'JOA', '+1'] },
  medalhas: [
    { titulo: 'Explorador', descricao: '10 missões concluídas', status: 'conquistada' },
    { titulo: 'Raciocínio', descricao: '25 acertos', status: 'conquistada' },
    { titulo: 'Imbatível', descricao: 'Sequência de 7 dias', status: 'conquistada' },
    { titulo: 'Mestre das Frações', descricao: 'Em andamento', status: 'em-andamento' }
  ]
};
