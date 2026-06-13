using EduMintAI.Api.DTOs;

namespace EduMintAI.Api.Services;

public class RankingService
{
    private readonly SeedDataService _seed;

    public RankingService(SeedDataService seed)
    {
        _seed = seed;
    }

    public List<RankingItemDto> ObterRanking(string gincanaId) => _seed.GetRanking();
}
