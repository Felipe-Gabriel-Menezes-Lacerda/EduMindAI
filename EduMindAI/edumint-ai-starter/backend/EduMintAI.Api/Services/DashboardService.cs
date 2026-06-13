using EduMintAI.Api.DTOs;

namespace EduMintAI.Api.Services;

public class DashboardService
{
    private readonly SeedDataService _seed;

    public DashboardService(SeedDataService seed)
    {
        _seed = seed;
    }

    public DashboardAlunoResponse ObterDashboardAluno(string alunoId) => _seed.GetDashboardAluno();
    public DashboardProfessorResponse ObterDashboardTurma(string turmaId) => _seed.GetDashboardProfessor();
}
