namespace EduMintAI.Api.DTOs;

public record LoginRequest(string Email, string Senha, string Perfil, string? FirebaseIdToken = null);

public record LoginResponse(
    string Token,
    string RedirectUrl,
    bool AuthenticatedWithFirebase,
    UsuarioAutenticadoDto Usuario
);

public record UsuarioAutenticadoDto(
    string Id,
    string Nome,
    string Email,
    string Perfil,
    string? TurmaId
);
