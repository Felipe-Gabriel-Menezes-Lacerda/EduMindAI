namespace EduMintAI.Api.Models;

public class Participacao
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string AlunoId { get; set; } = string.Empty;
    public string GincanaId { get; set; } = string.Empty;
    public string MissaoId { get; set; } = string.Empty;
    public string Alternativa { get; set; } = string.Empty;
    public bool Correta { get; set; }
    public int PontosGanhos { get; set; }
    public DateTime RespondidaEm { get; set; } = DateTime.UtcNow;
}
