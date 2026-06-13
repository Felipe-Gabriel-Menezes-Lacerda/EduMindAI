using EduMintAI.Api.DTOs;
using EduMintAI.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace EduMintAI.Api.Controllers;

[ApiController]
[Route("api/diagnosticos")]
public class DiagnosticosController : ControllerBase
{
    private readonly DiagnosticoService _service;

    public DiagnosticosController(DiagnosticoService service)
    {
        _service = service;
    }

    [HttpGet("questoes")]
    public IActionResult ObterQuestoes() => Ok(_service.ObterQuestoes());

    [HttpPost("responder")]
    public async Task<IActionResult> Responder([FromBody] ResponderDiagnosticoRequest request)
    {
        var resultado = await _service.CorrigirAsync(request);
        return Ok(resultado);
    }
}
