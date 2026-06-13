using EduMintAI.Api.DTOs;
using EduMintAI.Api.Models;

namespace EduMintAI.Api.Services;

public class MissaoService
{
    private readonly SeedDataService _seed;
    private readonly FirebaseService _firebase;

    public MissaoService(SeedDataService seed, FirebaseService firebase)
    {
        _seed = seed;
        _firebase = firebase;
    }

    public MissaoAlunoResponse ObterMissaoAluno(string gincanaId, string alunoId) => _seed.GetMissaoAluno();

    public async Task<RespostaMissaoResponse> ResponderAsync(ResponderMissaoRequest request)
    {
        var missao = _seed.GetMissaoAluno();
        var correta = string.Equals(request.Alternativa, missao.DesafioAtual.AlternativaCorreta, StringComparison.OrdinalIgnoreCase);
        var resposta = new RespostaMissaoResponse(
            Correta: correta,
            PontosGanhos: correta ? missao.DesafioAtual.Pontos : 0,
            ProgressoAtual: correta ? 70 : missao.Progresso,
            Feedback: correta
                ? "Boa! Você identificou corretamente a fração pintada e ganhou 50 pontos."
                : "Quase lá! Conte novamente as partes pintadas e tente mais uma vez."
        );

        await _firebase.SaveDocumentAsync("participacoes", Guid.NewGuid().ToString("N"), new Participacao
        {
            AlunoId = request.AlunoId,
            GincanaId = request.GincanaId,
            MissaoId = request.MissaoId,
            Alternativa = request.Alternativa,
            Correta = correta,
            PontosGanhos = resposta.PontosGanhos
        });

        return resposta;
    }
}
