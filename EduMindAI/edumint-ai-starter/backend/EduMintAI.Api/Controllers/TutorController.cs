using EduMintAI.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace EduMintAI.Api.Controllers;

[ApiController]
[Route("api/tutor")]
public class TutorController : ControllerBase
{
    private readonly IaService _iaService;

    public TutorController(IaService iaService)
    {
        _iaService = iaService;
    }

    [HttpPost("perguntar")]
    public async Task<IActionResult> Perguntar([FromBody] TutorRequest request)
    {
        var resposta = await _iaService.GerarTextoAsync(request.Pergunta);
        return Ok(new { resposta });
    }
}

public record TutorRequest(string AlunoId, string Pergunta, string Contexto);
