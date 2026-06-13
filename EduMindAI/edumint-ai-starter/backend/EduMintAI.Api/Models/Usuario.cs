namespace EduMintAI.Api.Models;

public class Usuario
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Perfil { get; set; } = "aluno";
    public string? TurmaId { get; set; }
    public DateTime CriadoEm { get; set; } = DateTime.UtcNow;
}
