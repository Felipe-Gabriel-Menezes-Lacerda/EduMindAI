namespace EduMintAI.Api.Services;

public class IaService
{
    private readonly IConfiguration _configuration;

    public IaService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public Task<string> GerarTextoAsync(string prompt)
    {
        var provider = _configuration["Ai:Provider"] ?? "mock";
        if (provider.Equals("mock", StringComparison.OrdinalIgnoreCase))
        {
            return Task.FromResult("Posso te ajudar sugerindo exemplos guiados, prática curta e revisão das habilidades com maior erro. Este retorno está mockado e pronto para trocar por um provedor real de IA generativa.");
        }

        return Task.FromResult("Integração real de IA ainda não configurada.");
    }
}
