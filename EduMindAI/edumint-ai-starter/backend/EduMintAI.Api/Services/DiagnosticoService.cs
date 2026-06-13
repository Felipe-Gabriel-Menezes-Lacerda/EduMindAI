using EduMintAI.Api.DTOs;
using EduMintAI.Api.Models;

namespace EduMintAI.Api.Services;

public class DiagnosticoService
{
    private readonly SeedDataService _seed;
    private readonly FirebaseService _firebase;

    public DiagnosticoService(SeedDataService seed, FirebaseService firebase)
    {
        _seed = seed;
        _firebase = firebase;
    }

    public List<Questao> ObterQuestoes() => _seed.GetQuestoesDiagnostico();

    public async Task<ResultadoDiagnosticoResponse> CorrigirAsync(ResponderDiagnosticoRequest request)
    {
        var questoes = _seed.GetQuestoesDiagnostico();
        var total = request.Respostas.Count == 0 ? 1 : request.Respostas.Count;
        var acertos = 0;
        var errosPorHabilidade = new Dictionary<string, int>();
        var errosPorTipo = new Dictionary<string, int>();

        foreach (var resposta in request.Respostas)
        {
            var questao = questoes.FirstOrDefault(q => q.Id == resposta.QuestaoId);
            if (questao is null)
            {
                continue;
            }

            if (string.Equals(questao.RespostaCorreta, resposta.Resposta, StringComparison.OrdinalIgnoreCase))
            {
                acertos++;
                continue;
            }

            errosPorHabilidade[questao.Habilidade] = errosPorHabilidade.GetValueOrDefault(questao.Habilidade) + 1;
            var tipoErro = questao.TipoErroPorAlternativa.GetValueOrDefault(resposta.Resposta, "Erro não classificado");
            errosPorTipo[tipoErro] = errosPorTipo.GetValueOrDefault(tipoErro) + 1;
        }

        var desempenho = (int)Math.Round((double)acertos / total * 100);
        var status = desempenho switch { < 50 => "Reforço básico", < 70 => "Em desenvolvimento", < 90 => "Adequado", _ => "Avançado" };
        var habilidadesCriticas = errosPorHabilidade.OrderByDescending(x => x.Value).Select(x => x.Key).Take(3).ToList();
        var tipoPredominante = errosPorTipo.OrderByDescending(x => x.Value).Select(x => x.Key).FirstOrDefault() ?? "Sem erro predominante";
        var feedback = habilidadesCriticas.Count == 0
            ? "Ótimo desempenho. Continue avançando para desafios mais complexos."
            : $"Você precisa reforçar {string.Join(", ", habilidadesCriticas)}. O principal padrão identificado foi: {tipoPredominante}.";

        var diagnosticoId = Guid.NewGuid().ToString("N");
        var resultado = new ResultadoDiagnosticoResponse(diagnosticoId, desempenho, status, habilidadesCriticas, tipoPredominante, feedback);

        await _firebase.SaveDocumentAsync("diagnosticos", diagnosticoId, new Diagnostico
        {
            Id = diagnosticoId,
            AlunoId = request.AlunoId,
            TurmaId = request.TurmaId,
            DesempenhoGeral = desempenho,
            Status = status,
            HabilidadesCriticas = habilidadesCriticas,
            TipoErroPredominante = tipoPredominante
        });

        await _firebase.SaveDocumentAsync("resultadosDiagnostico", Guid.NewGuid().ToString("N"), new ResultadoDiagnostico
        {
            DiagnosticoId = diagnosticoId,
            DesempenhoGeral = desempenho,
            Status = status,
            HabilidadesCriticas = habilidadesCriticas,
            TipoErroPredominante = tipoPredominante,
            Feedback = feedback
        });

        return resultado;
    }
}
