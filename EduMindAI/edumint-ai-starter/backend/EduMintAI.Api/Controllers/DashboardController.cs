using EduMintAI.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace EduMintAI.Api.Controllers;

[ApiController]
[Route("api/dashboard")]
public class DashboardController : ControllerBase
{
    private readonly DashboardService _service;

    public DashboardController(DashboardService service)
    {
        _service = service;
    }

    [HttpGet("turma/{turmaId}")]
    public IActionResult ObterTurma(string turmaId) => Ok(_service.ObterDashboardTurma(turmaId));

    [HttpGet("aluno/{alunoId}")]
    public IActionResult ObterAluno(string alunoId) => Ok(_service.ObterDashboardAluno(alunoId));
}
