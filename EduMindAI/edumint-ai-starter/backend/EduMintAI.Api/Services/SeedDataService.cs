using EduMintAI.Api.DTOs;
using EduMintAI.Api.Models;

namespace EduMintAI.Api.Services;

public class SeedDataService
{
    public List<Questao> GetQuestoesDiagnostico() =>
    [
        new Questao
        {
            Id = "q1",
            Disciplina = "Matemática",
            Habilidade = "Divisão",
            Enunciado = "João tem 24 balas e quer dividir igualmente entre 6 amigos. Quantas balas cada amigo recebe?",
            RespostaCorreta = "D",
            Alternativas = [new() { Letra = "A", Texto = "30" }, new() { Letra = "B", Texto = "6" }, new() { Letra = "C", Texto = "5" }, new() { Letra = "D", Texto = "4" }],
            TipoErroPorAlternativa = new() { ["A"] = "Erro por escolha incorreta da operação", ["B"] = "Erro conceitual", ["C"] = "Erro de cálculo" }
        },
        new Questao
        {
            Id = "q2",
            Disciplina = "Matemática",
            Habilidade = "Frações",
            Enunciado = "Uma figura foi dividida em 6 partes iguais. 4 partes estão pintadas. Qual fração representa a parte pintada?",
            RespostaCorreta = "D",
            Alternativas = [new() { Letra = "A", Texto = "1/6" }, new() { Letra = "B", Texto = "2/6" }, new() { Letra = "C", Texto = "3/6" }, new() { Letra = "D", Texto = "4/6" }],
            TipoErroPorAlternativa = new() { ["A"] = "Erro conceitual", ["B"] = "Erro de interpretação", ["C"] = "Erro de cálculo" }
        },
        new Questao
        {
            Id = "q3",
            Disciplina = "Português",
            Habilidade = "Interpretação de enunciados",
            Enunciado = "No problema: 'divida igualmente entre os colegas', a palavra igualmente indica qual operação?",
            RespostaCorreta = "B",
            Alternativas = [new() { Letra = "A", Texto = "Somar" }, new() { Letra = "B", Texto = "Dividir" }, new() { Letra = "C", Texto = "Multiplicar" }, new() { Letra = "D", Texto = "Subtrair" }],
            TipoErroPorAlternativa = new() { ["A"] = "Erro de interpretação", ["C"] = "Erro conceitual", ["D"] = "Erro de interpretação" }
        }
    ];

    public DashboardAlunoResponse GetDashboardAluno() => new(
        Nome: "Ana",
        Saudacao: "Olá, Ana!",
        Resumo: "Que bom te ver por aqui. Continue sua jornada e alcance novas conquistas.",
        NivelAtual: 3,
        XpAtual: 250,
        XpMeta: 400,
        Stats:
        [
            new("Nível atual", "Nível 3", "Aprendiz em evolução", "NV", "mint", 63),
            new("Pontos", "1.250", "+120 esta semana", "XP", "purple"),
            new("Missões concluídas", "12", "de 20 planejadas", "OK", "blue", 60),
            new("Tempo de estudo", "5h 30m", "esta semana", "TM", "amber")
        ],
        Diagnostico:
        [
            new("Interpretação de enunciados", 82, "Muito bem", "Você demonstra ótima compreensão dos problemas.", "LE", "mint"),
            new("Divisão", 48, "Ponto de atenção", "Essa habilidade precisa de mais prática. Vamos melhorar juntos!", "DV", "red"),
            new("Frações", 76, "Bom progresso", "Você está no caminho certo. Continue praticando.", "FR", "mint")
        ],
        Trilha:
        [
            new(1, "Revisar divisão", "Reforce os conceitos essenciais da divisão.", "concluido"),
            new(2, "Exemplo guiado", "Assista a uma explicação com exemplos práticos.", "concluido"),
            new(3, "Praticar com desafios", "Resolva exercícios e ganhe pontos.", "atual", "Continuar"),
            new(4, "Quiz final", "Teste seus conhecimentos antes da fase final.", "bloqueado"),
            new(5, "Conquista da etapa", "Complete tudo e receba sua recompensa.", "bloqueado")
        ],
        Tutor: new("Oi, Ana!", "Estou aqui para ajudar a aprender cada vez mais. Em que posso ajudar hoje?", "Conversar com o tutor"),
        ProximaMissao: new("Divisão na prática", "Resolva 5 desafios sobre divisão e ganhe 80 pontos.", 2, 5, "+80 pontos", "Começar missão")
    );

    public DashboardProfessorResponse GetDashboardProfessor() => new(
        Turma: "Turma 6º Ano A",
        TotalAlunos: 28,
        AlunosAvaliados: 26,
        MediaTurma: 68,
        AlunosEmAtencao: 9,
        AlunosAvancados: 6,
        MapaDefasagem: new Dictionary<string, int>
        {
            ["Interpretação de enunciados"] = 42,
            ["Divisão"] = 55,
            ["Frações"] = 63,
            ["Problemas matemáticos"] = 78
        },
        EvolucaoTurma: [new("05/abr", 48), new("20/abr", 53), new("05/mai", 59), new("20/mai", 62), new("05/jun", 68)],
        AlunosQuePrecisamDeApoio:
        [
            new("João Pedro Silva", 28, ["Interpretação", "Divisão"], "05/06/2024"),
            new("Maria Eduarda Lima", 35, ["Interpretação", "Frações"], "05/06/2024"),
            new("Lucas Gabriel Santos", 40, ["Divisão", "Problemas"], "05/06/2024")
        ],
        SugestaoPedagogica: "Com base nos resultados, recomendamos priorizar leitura e compreensão de problemas antes de aprofundar cálculos mais complexos.",
        FocoPrincipal: "Interpretação de enunciados",
        AcoesSugeridas:
        [
            "Aplicar trilha de leitura e compreensão de problemas.",
            "Explorar atividades da Quest relacionadas ao tema.",
            "Reforçar exemplos práticos no contexto do aluno."
        ],
        ProximosPassos: [new("Diagnóstico de Matemática", "18/06/2024"), new("Diagnóstico de Português", "25/06/2024")]
    );

    public GincanaGeradaResponse GetGincanaPreview(CriarGincanaRequest request)
    {
        var titulo = request.Disciplina.Equals("História", StringComparison.OrdinalIgnoreCase)
            ? "A Batalha dos Fragmentos Perdidos"
            : $"O Desafio dos Guardiões de {request.Conteudo}";

        var gincana = new Gincana
        {
            Titulo = titulo,
            TurmaId = request.TurmaId,
            ProfessorId = request.ProfessorId,
            Disciplina = request.Disciplina,
            Conteudo = request.Conteudo,
            Habilidade = request.Habilidade,
            Tema = request.Tema,
            Formato = request.Formato,
            Narrativa = request.Disciplina.Equals("História", StringComparison.OrdinalIgnoreCase)
                ? "Após a queda da Bastilha, fragmentos de documentos mágicos foram espalhados pela França. Sua missão é recuperar as informações, responder desafios e restaurar a história antes que sejam esquecidos para sempre!"
                : $"Os guardiões do conhecimento convocaram a turma para uma aventura sobre {request.Conteudo}. Cada missão reforça a habilidade {request.Habilidade}.",
            Status = "rascunho",
            Missoes =
            [
                new() { Id = "m1", Ordem = 1, Titulo = "A Queda da Bastilha", Descricao = "Responda questões sobre as causas do conteúdo principal.", Tipo = "quiz", Pontos = 100 },
                new() { Id = "m2", Ordem = 2, Titulo = "Assembleia dos Estados", Descricao = "Complete desafios colaborativos com foco em interpretação.", Tipo = "colaborativa", Pontos = 120 },
                new() { Id = "m3", Ordem = 3, Titulo = "A Declaração dos Direitos", Descricao = "Analise pistas e conecte conceitos ao contexto.", Tipo = "analise", Pontos = 120 },
                new() { Id = "m4", Ordem = 4, Titulo = "O Reinado do Terror", Descricao = "Resolva enigmas com maior dificuldade.", Tipo = "desafio", Pontos = 130 },
                new() { Id = "m5", Ordem = 5, Titulo = "O Legado da Revolução", Descricao = "Desafio final para consolidar a aprendizagem.", Tipo = "boss", Pontos = 180 }
            ],
            Premios = [new() { Posicao = "1º lugar", Descricao = "Medalha de Ouro" }, new() { Posicao = "2º lugar", Descricao = "Medalha de Prata" }, new() { Posicao = "3º lugar", Descricao = "Medalha de Bronze" }]
        };

        return new GincanaGeradaResponse(gincana, 650, "A IA pode ajustar as missões após a geração. O professor continua no controle antes de publicar.");
    }

    public List<RankingItemDto> GetRanking() =>
    [
        new(1, "Equipe Estrela", 2480, "equipe"),
        new(2, "Os Gênios da Mente", 2210, "equipe"),
        new(3, "Matemágicos", 1980, "equipe"),
        new(4, "Fração Riders", 1640, "equipe"),
        new(5, "Sabichões", 1250, "equipe")
    ];

    public MissaoAlunoResponse GetMissaoAluno() => new(
        GincanaId: "gincana_demo_001",
        Titulo: "Missão 2 - O Desafio das Frações Perdidas",
        Subtitulo: "EduMint Quest",
        Narrativa: "Os guardiões das frações precisam da sua ajuda. As peças do mapa foram espalhadas pelo reino e só você pode encontrá-las resolvendo os desafios. Cada acerto aproxima da restauração do mapa e da vitória da sua equipe!",
        Progresso: 60,
        FaseAtual: "Fase 2 de 5",
        TempoRestante: "18 min",
        PontosAtuais: 1250,
        SequenciaDias: 7,
        BaudeConhecimento: 74,
        DesafioAtual: new(
            MissaoId: "m2",
            Indice: 3,
            Total: 10,
            Pergunta: "Qual fração representa a parte pintada da figura abaixo?",
            Dica: "Conte quantas partes estão pintadas e quantas partes totais existem!",
            Pontos: 50,
            AlternativaCorreta: "D",
            Alternativas: [new("A", "A", "1/6"), new("B", "B", "2/6"), new("C", "C", "3/6"), new("D", "D", "4/6")]
        ),
        Ranking: GetRanking(),
        Equipe: new("Sabichões", 5, 1250, ["ANA", "LUC", "MIA", "JOA", "+1"]),
        Medalhas: [new("Explorador", "10 missões concluídas", "conquistada"), new("Raciocínio", "25 acertos", "conquistada"), new("Imbatível", "Sequência de 7 dias", "conquistada"), new("Mestre das Frações", "Em andamento", "em-andamento")]
    );
}
