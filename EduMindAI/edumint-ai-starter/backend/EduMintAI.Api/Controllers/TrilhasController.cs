using EduMintAI.Api.DTOs;
using EduMintAI.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace EduMintAI.Api.Controllers;

[ApiController]
[Route("api/trilhas")]
public class TrilhasController : ControllerBase
{
    private readonly TrilhaService _service;

    public TrilhasController(TrilhaService service)
    {
        _service = service;
    }

    [HttpPost("gerar")]
    public async Task<IActionResult> Gerar([FromBody] GerarTrilhaRequest request)
    {
        return Ok(await _service.GerarAsync(request));
    }
}
