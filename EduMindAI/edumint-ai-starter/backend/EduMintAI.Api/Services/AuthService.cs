using EduMintAI.Api.DTOs;
using EduMintAI.Api.Models;

namespace EduMintAI.Api.Services;

public class AuthService
{
    private readonly IConfiguration _configuration;
    private readonly FirebaseService _firebaseService;

    private readonly List<MockCredential> _demoUsers =
    [
        new(
            new Usuario
            {
                Id = "aluno_001",
                Nome = "Ana Souza",
                Email = "ana@email.com",
                Perfil = "aluno",
                TurmaId = "turma_6A"
            },
            "123456"
        ),
        new(
            new Usuario
            {
                Id = "prof_001",
                Nome = "Prof. Ana Clara",
                Email = "prof@edumint.ai",
                Perfil = "professor"
            },
            "123456"
        )
    ];

    public AuthService(IConfiguration configuration, FirebaseService firebaseService)
    {
        _configuration = configuration;
        _firebaseService = firebaseService;
    }

    public bool UseMockAuth => _configuration.GetValue("Firebase:UseMockAuth", true);

    public async Task<LoginResponse> LoginAsync(LoginRequest request)
    {
        var perfil = NormalizePerfil(request.Perfil);

        if (!UseMockAuth && !string.IsNullOrWhiteSpace(request.FirebaseIdToken))
        {
            var token = await _firebaseService.VerifyIdTokenAsync(request.FirebaseIdToken);
            var email = token.Claims.TryGetValue("email", out var claimEmail) ? claimEmail?.ToString() ?? request.Email : request.Email;
            var nome = token.Claims.TryGetValue("name", out var claimName) ? claimName?.ToString() ?? "Usuário EduMint" : "Usuário EduMint";
            var turmaId = perfil == "aluno" ? "turma_6A" : null;

            var firebaseUser = new Usuario
            {
                Id = token.Uid,
                Nome = nome,
                Email = email,
                Perfil = perfil,
                TurmaId = turmaId
            };

            return CriarResposta(firebaseUser, true);
        }

        var demoUser = _demoUsers.FirstOrDefault(item =>
            item.Usuario.Email.Equals(request.Email, StringComparison.OrdinalIgnoreCase) &&
            item.Usuario.Perfil.Equals(perfil, StringComparison.OrdinalIgnoreCase) &&
            item.Senha == request.Senha);

        if (demoUser is null)
        {
            throw new UnauthorizedAccessException("Credenciais inválidas. Use os acessos de demonstração ou envie um token do Firebase.");
        }

        return CriarResposta(demoUser.Usuario, false);
    }

    private static string NormalizePerfil(string? perfil) =>
        perfil?.Equals("professor", StringComparison.OrdinalIgnoreCase) == true ? "professor" : "aluno";

    private static LoginResponse CriarResposta(Usuario usuario, bool authenticatedWithFirebase)
    {
        var redirectUrl = usuario.Perfil == "professor" ? "/professor/dashboard" : "/aluno/dashboard";

        return new LoginResponse(
            Token: $"edumint-{usuario.Perfil}-{usuario.Id}",
            RedirectUrl: redirectUrl,
            AuthenticatedWithFirebase: authenticatedWithFirebase,
            Usuario: new UsuarioAutenticadoDto(
                usuario.Id,
                usuario.Nome,
                usuario.Email,
                usuario.Perfil,
                usuario.TurmaId
            )
        );
    }

    private sealed record MockCredential(Usuario Usuario, string Senha);
}
