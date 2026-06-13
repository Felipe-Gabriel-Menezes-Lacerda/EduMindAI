namespace EduMintAI.Api.Models;

public class Gincana
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string Titulo { get; set; } = string.Empty;
    public string TurmaId { get; set; } = string.Empty;
    public string ProfessorId { get; set; } = string.Empty;
    public string Disciplina { get; set; } = string.Empty;
    public string Conteudo { get; set; } = string.Empty;
    public string Habilidade { get; set; } = string.Empty;
    public string Tema { get; set; } = string.Empty;
    public string Formato { get; set; } = "equipes";
    public string Narrativa { get; set; } = string.Empty;
    public string Status { get; set; } = "rascunho";
    public DateTime CriadaEm { get; set; } = DateTime.UtcNow;
    public List<Missao> Missoes { get; set; } = [];
    public List<Premio> Premios { get; set; } = [];
}

public class Missao
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public int Ordem { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
    public string Tipo { get; set; } = "quiz";
    public int Pontos { get; set; }
}

public class Premio
{
    public string Posicao { get; set; } = string.Empty;
    public string Descricao { get; set; } = string.Empty;
}
