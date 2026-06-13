namespace EduMintAI.Api.Models;

public class Equipe
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string Nome { get; set; } = string.Empty;
    public string GincanaId { get; set; } = string.Empty;
    public List<string> AlunosIds { get; set; } = [];
    public int Pontos { get; set; }
}
