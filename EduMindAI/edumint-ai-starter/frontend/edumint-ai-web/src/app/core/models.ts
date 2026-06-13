export interface NavItem { key: string; label: string; route: string; icon: string; }
export interface UsuarioAutenticado { id: string; nome: string; email: string; perfil: 'aluno' | 'professor'; turmaId?: string | null; }
export interface LoginRequest { email: string; senha: string; perfil: 'aluno' | 'professor'; firebaseIdToken?: string; }
export interface LoginResponse { token: string; redirectUrl: string; authenticatedWithFirebase: boolean; usuario: UsuarioAutenticado; }
export interface AuthSession extends LoginResponse {}
export interface StatCard { titulo: string; valor: string; detalhe: string; icone: string; tonalidade: 'mint' | 'purple' | 'blue' | 'amber'; progresso?: number; }
export interface SkillCard { titulo: string; percentual: number; status: string; descricao: string; icone: string; tonalidade: 'mint' | 'red' | 'amber' | 'blue'; }
export interface TrailStep { ordem: number; titulo: string; descricao: string; status: 'concluido' | 'atual' | 'bloqueado'; acao?: string; }
export interface TutorCard { saudacao: string; mensagem: string; acao: string; }
export interface NextMission { titulo: string; descricao: string; progresso: number; totalEtapas: number; recompensa: string; acao: string; }
export interface DashboardAluno { nome: string; saudacao: string; resumo: string; nivelAtual: number; xpAtual: number; xpMeta: number; stats: StatCard[]; diagnostico: SkillCard[]; trilha: TrailStep[]; tutor: TutorCard; proximaMissao: NextMission; }
export interface AlunoAtencao { nome: string; mediaGeral: number; principaisDificuldades: string[]; ultimoDiagnostico: string; }
export interface EvolucaoTurma { rotulo: string; valor: number; }
export interface ProximoPasso { titulo: string; data: string; }
export interface DashboardProfessor { turma: string; totalAlunos: number; alunosAvaliados: number; mediaTurma: number; alunosEmAtencao: number; alunosAvancados: number; mapaDefasagem: Record<string, number>; evolucaoTurma: EvolucaoTurma[]; alunosQuePrecisamDeApoio: AlunoAtencao[]; sugestaoPedagogica: string; focoPrincipal: string; acoesSugeridas: string[]; proximosPassos: ProximoPasso[]; }
export interface QuestaoDiagnostico { id: string; disciplina: string; habilidade: string; enunciado: string; alternativas: Alternativa[]; }
export interface Alternativa { letra: string; texto: string; }
export interface ResultadoDiagnostico { diagnosticoId: string; desempenhoGeral: number; status: string; habilidadesCriticas: string[]; tipoErroPredominante: string; feedback: string; }
export interface TrilhaRequest { alunoId: string; diagnosticoId: string; habilidadesCriticas: string[]; nivel: string; }
export interface AtividadeTrilha { ordem: number; tipo: string; titulo: string; descricao: string; }
export interface TrilhaAprendizagem { id: string; alunoId: string; diagnosticoId: string; titulo: string; nivel: string; habilidadesTrabalhadas: string[]; atividades: AtividadeTrilha[]; criadaPorIa: boolean; }
export interface CriarGincanaRequest { turmaId: string; professorId: string; disciplina: string; conteudo: string; habilidade: string; tema: string; formato: string; duracaoDias: number; }
export interface Premio { posicao: string; descricao: string; }
export interface Missao { id: string; ordem: number; titulo: string; descricao: string; tipo: string; pontos: number; }
export interface Gincana { id: string; turmaId: string; professorId: string; disciplina: string; conteudo: string; habilidade: string; tema: string; formato: string; titulo: string; narrativa: string; status: string; missoes: Missao[]; premios: Premio[]; }
export interface GincanaPreview { gincana: Gincana; pontuacaoTotal: number; avisoRevisao: string; }
export interface RankingItem { posicao: number; nome: string; pontos: number; tipo: string; }
export interface Medalha { titulo: string; descricao: string; status: 'conquistada' | 'em-andamento' | 'bloqueada'; }
export interface MissaoAlternativa { id: string; rotulo: string; texto: string; }
export interface DesafioAtual { missaoId: string; indice: number; total: number; pergunta: string; dica: string; pontos: number; alternativaCorreta: string; alternativas: MissaoAlternativa[]; }
export interface EquipeResumo { nome: string; posicao: number; pontos: number; membros: string[]; }
export interface MissaoAluno { gincanaId: string; titulo: string; subtitulo: string; narrativa: string; progresso: number; faseAtual: string; tempoRestante: string; pontosAtuais: number; sequenciaDias: number; baudeConhecimento: number; desafioAtual: DesafioAtual; ranking: RankingItem[]; equipe: EquipeResumo; medalhas: Medalha[]; }
export interface RespostaMissao { alunoId: string; gincanaId: string; missaoId: string; alternativa: string; }
export interface RespostaMissaoResultado { correta: boolean; pontosGanhos: number; progressoAtual: number; feedback: string; }
