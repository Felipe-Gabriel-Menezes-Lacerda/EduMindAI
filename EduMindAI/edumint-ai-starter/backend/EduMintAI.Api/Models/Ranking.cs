namespace EduMintAI.Api.Models;

public class RankingItem
{
    public int Posicao { get; set; }
    public string Nome { get; set; } = string.Empty;
    public int Pontos { get; set; }
    public string Tipo { get; set; } = "equipe";
}
