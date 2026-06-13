namespace EduMintAI.Api.Models;

public class Aluno
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string Nome { get; set; } = string.Empty;
    public string AnoEscolar { get; set; } = "6º Ano";
    public string TurmaId { get; set; } = string.Empty;
    public string UsuarioId { get; set; } = string.Empty;
}
