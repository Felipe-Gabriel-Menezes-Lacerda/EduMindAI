namespace EduMintAI.Api.DTOs;

public record MissaoAlunoResponse(
    string GincanaId,
    string Titulo,
    string Subtitulo,
    string Narrativa,
    int Progresso,
    string FaseAtual,
    string TempoRestante,
    int PontosAtuais,
    int SequenciaDias,
    int BaudeConhecimento,
    DesafioAtualDto DesafioAtual,
    List<RankingItemDto> Ranking,
    EquipeResumoDto Equipe,
    List<MedalhaDto> Medalhas
);

public record DesafioAtualDto(
    string MissaoId,
    int Indice,
    int Total,
    string Pergunta,
    string Dica,
    int Pontos,
    string AlternativaCorreta,
    List<AlternativaMissaoDto> Alternativas
);

public record AlternativaMissaoDto(string Id, string Rotulo, string Texto);
public record RankingItemDto(int Posicao, string Nome, int Pontos, string Tipo);
public record EquipeResumoDto(string Nome, int Posicao, int Pontos, List<string> Membros);
public record MedalhaDto(string Titulo, string Descricao, string Status);
public record ResponderMissaoRequest(string AlunoId, string GincanaId, string MissaoId, string Alternativa);
public record RespostaMissaoResponse(bool Correta, int PontosGanhos, int ProgressoAtual, string Feedback);
