namespace EduMintAI.Api.Models;

public class Turma
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string Nome { get; set; } = "6º Ano A";
    public string Ano { get; set; } = "6º Ano";
    public string ProfessorId { get; set; } = string.Empty;
    public int TotalAlunos { get; set; }
}
