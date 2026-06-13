namespace EduMintAI.Api.Models;

public class Diagnostico
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string AlunoId { get; set; } = string.Empty;
    public string TurmaId { get; set; } = string.Empty;
    public DateTime Data { get; set; } = DateTime.UtcNow;
    public int DesempenhoGeral { get; set; }
    public string Status { get; set; } = string.Empty;
    public List<string> HabilidadesCriticas { get; set; } = [];
    public string TipoErroPredominante { get; set; } = string.Empty;
}
