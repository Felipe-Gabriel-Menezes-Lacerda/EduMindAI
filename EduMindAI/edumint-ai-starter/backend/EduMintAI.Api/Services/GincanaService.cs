using EduMintAI.Api.DTOs;
using EduMintAI.Api.Models;

namespace EduMintAI.Api.Services;

public class GincanaService
{
    private readonly SeedDataService _seed;
    private readonly FirebaseService _firebase;

    public GincanaService(SeedDataService seed, FirebaseService firebase)
    {
        _seed = seed;
        _firebase = firebase;
    }

    public GincanaGeradaResponse GerarPreview(CriarGincanaRequest request) => _seed.GetGincanaPreview(request);

    public async Task<Gincana> PublicarAsync(CriarGincanaRequest request)
    {
        var preview = GerarPreview(request);
        preview.Gincana.Status = "publicada";
        await _firebase.SaveDocumentAsync("gincanas", preview.Gincana.Id, preview.Gincana);
        return preview.Gincana;
    }
}
