namespace EduMintAI.Api.Models;

public class Professor
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string Nome { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string UsuarioId { get; set; } = string.Empty;
}
