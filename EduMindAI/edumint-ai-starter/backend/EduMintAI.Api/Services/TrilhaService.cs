using EduMintAI.Api.DTOs;
using EduMintAI.Api.Models;

namespace EduMintAI.Api.Services;

public class TrilhaService
{
    private readonly FirebaseService _firebase;

    public TrilhaService(FirebaseService firebase)
    {
        _firebase = firebase;
    }

    public async Task<TrilhaAprendizagem> GerarAsync(GerarTrilhaRequest request)
    {
        var foco = request.HabilidadesCriticas.FirstOrDefault() ?? "desafios avançados";
        var trilha = new TrilhaAprendizagem
        {
            AlunoId = request.AlunoId,
            DiagnosticoId = request.DiagnosticoId,
            Titulo = $"Missão de recomposição: {foco}",
            Nivel = request.Nivel,
            HabilidadesTrabalhadas = request.HabilidadesCriticas,
            CriadaPorIa = true,
            Atividades =
            [
                new() { Ordem = 1, Tipo = "explicacao", Titulo = $"Entendendo {foco}", Descricao = "Retome os conceitos essenciais com exemplos do cotidiano." },
                new() { Ordem = 2, Tipo = "exemplo_guiado", Titulo = "Exemplo guiado", Descricao = "Veja como resolver um desafio passo a passo antes de praticar." },
                new() { Ordem = 3, Tipo = "quiz", Titulo = "Praticar com desafios", Descricao = "Resolva exercícios curtos e receba feedback imediato." },
                new() { Ordem = 4, Tipo = "validacao", Titulo = "Quiz final", Descricao = "Valide se a habilidade foi recomposta para seguir de nível." }
            ]
        };

        await _firebase.SaveDocumentAsync("trilhas", trilha.Id, trilha);
        return trilha;
    }
}
