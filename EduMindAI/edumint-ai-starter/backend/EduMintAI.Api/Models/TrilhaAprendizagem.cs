namespace EduMintAI.Api.Models;

public class TrilhaAprendizagem
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string AlunoId { get; set; } = string.Empty;
    public string DiagnosticoId { get; set; } = string.Empty;
    public string Titulo { get; set; } = string.Empty;
    public string Nivel { get; set; } = string.Empty;
    public List<string> HabilidadesTrabalhadas { get; set; } = [];
    public List<AtividadeTrilha> Atividades { get; set; } = [];
    public bool CriadaPorIa { get; set; }
    public DateTime CriadaEm { get; set; } = DateTime.UtcNow;
}

public class AtividadeTrilha
{
    public int Ordem { get; set; }
    public string Tipo { get; set; } = string.Empty;
    public string Titulo { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
}
