namespace EduMintAI.Api.Models;

public class Questao
{
    public string Id { get; set; } = Guid.NewGuid().ToString("N");
    public string Enunciado { get; set; } = string.Empty;
    public string Disciplina { get; set; } = string.Empty;
    public string Habilidade { get; set; } = string.Empty;
    public string Nivel { get; set; } = "básico";
    public List<Alternativa> Alternativas { get; set; } = [];
    public string RespostaCorreta { get; set; } = string.Empty;
    public Dictionary<string, string> TipoErroPorAlternativa { get; set; } = [];
}

public class Alternativa
{
    public string Letra { get; set; } = string.Empty;
    public string Texto { get; set; } = string.Empty;
}
