namespace EduMintAI.Api.DTOs;

public record DashboardAlunoResponse(
    string Nome,
    string Saudacao,
    string Resumo,
    int NivelAtual,
    int XpAtual,
    int XpMeta,
    List<StatCardDto> Stats,
    List<SkillCardDto> Diagnostico,
    List<TrailStepDto> Trilha,
    TutorCardDto Tutor,
    NextMissionDto ProximaMissao
);

public record DashboardProfessorResponse(
    string Turma,
    int TotalAlunos,
    int AlunosAvaliados,
    int MediaTurma,
    int AlunosEmAtencao,
    int AlunosAvancados,
    Dictionary<string, int> MapaDefasagem,
    List<EvolucaoTurmaDto> EvolucaoTurma,
    List<AlunoAtencaoDto> AlunosQuePrecisamDeApoio,
    string SugestaoPedagogica,
    string FocoPrincipal,
    List<string> AcoesSugeridas,
    List<ProximoPassoDto> ProximosPassos
);

public record StatCardDto(string Titulo, string Valor, string Detalhe, string Icone, string Tonalidade, int? Progresso = null);
public record SkillCardDto(string Titulo, int Percentual, string Status, string Descricao, string Icone, string Tonalidade);
public record TrailStepDto(int Ordem, string Titulo, string Descricao, string Status, string? Acao = null);
public record TutorCardDto(string Saudacao, string Mensagem, string Acao);
public record NextMissionDto(string Titulo, string Descricao, int Progresso, int TotalEtapas, string Recompensa, string Acao);
public record EvolucaoTurmaDto(string Rotulo, int Valor);
public record AlunoAtencaoDto(string Nome, int MediaGeral, List<string> PrincipaisDificuldades, string UltimoDiagnostico);
public record ProximoPassoDto(string Titulo, string Data);
