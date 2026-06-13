using EduMintAI.Api.Models;

namespace EduMintAI.Api.DTOs;

public record ResponderDiagnosticoRequest(string AlunoId, string TurmaId, List<RespostaAluno> Respostas);

public record ResultadoDiagnosticoResponse(
    string DiagnosticoId,
    int DesempenhoGeral,
    string Status,
    List<string> HabilidadesCriticas,
    string TipoErroPredominante,
    string Feedback
);

public record GerarTrilhaRequest(string AlunoId, string DiagnosticoId, List<string> HabilidadesCriticas, string Nivel);
