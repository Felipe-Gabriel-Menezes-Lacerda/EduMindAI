namespace EduMintAI.Api.Models;

public class ResultadoDiagnostico
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string DiagnosticoId { get; set; } = string.Empty;
    public int DesempenhoGeral { get; set; }
    public string Status { get; set; } = string.Empty;
    public List<string> HabilidadesCriticas { get; set; } = [];
    public string TipoErroPredominante { get; set; } = string.Empty;
    public string Feedback { get; set; } = string.Empty;
}
