using EduMintAI.Api.Models;

namespace EduMintAI.Api.DTOs;

public record CriarGincanaRequest(
    string TurmaId,
    string ProfessorId,
    string Disciplina,
    string Conteudo,
    string Habilidade,
    string Tema,
    string Formato,
    int DuracaoDias
);

public record GincanaGeradaResponse(Gincana Gincana, int PontuacaoTotal, string AvisoRevisao);
