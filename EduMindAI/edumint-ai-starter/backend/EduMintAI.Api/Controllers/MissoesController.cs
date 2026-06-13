using EduMintAI.Api.DTOs;
using EduMintAI.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace EduMintAI.Api.Controllers;

[ApiController]
[Route("api/missoes")]
public class MissoesController : ControllerBase
{
    private readonly MissaoService _service;

    public MissoesController(MissaoService service)
    {
        _service = service;
    }

    [HttpGet("{gincanaId}/aluno/{alunoId}")]
    public IActionResult ObterMissaoAluno(string gincanaId, string alunoId)
    {
        return Ok(_service.ObterMissaoAluno(gincanaId, alunoId));
    }

    [HttpPost("responder")]
    public async Task<IActionResult> Responder([FromBody] ResponderMissaoRequest request)
    {
        return Ok(await _service.ResponderAsync(request));
    }
}
