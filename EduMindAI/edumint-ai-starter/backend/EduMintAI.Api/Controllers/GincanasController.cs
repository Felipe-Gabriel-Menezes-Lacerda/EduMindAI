using EduMintAI.Api.DTOs;
using EduMintAI.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace EduMintAI.Api.Controllers;

[ApiController]
[Route("api/gincanas")]
public class GincanasController : ControllerBase
{
    private readonly GincanaService _gincanaService;

    public GincanasController(GincanaService gincanaService)
    {
        _gincanaService = gincanaService;
    }

    [HttpPost("gerar-preview")]
    public IActionResult GerarPreview([FromBody] CriarGincanaRequest request)
    {
        return Ok(_gincanaService.GerarPreview(request));
    }

    [HttpPost("publicar")]
    public async Task<IActionResult> Publicar([FromBody] CriarGincanaRequest request)
    {
        return Ok(await _gincanaService.PublicarAsync(request));
    }
}
