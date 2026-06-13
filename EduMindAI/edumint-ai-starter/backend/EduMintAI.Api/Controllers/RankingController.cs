using EduMintAI.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace EduMintAI.Api.Controllers;

[ApiController]
[Route("api/rankings")]
public class RankingController : ControllerBase
{
    private readonly RankingService _service;

    public RankingController(RankingService service)
    {
        _service = service;
    }

    [HttpGet("{gincanaId}")]
    public IActionResult ObterRanking(string gincanaId)
    {
        return Ok(_service.ObterRanking(gincanaId));
    }
}
