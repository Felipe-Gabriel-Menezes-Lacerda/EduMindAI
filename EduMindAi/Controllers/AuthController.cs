using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using FirebaseAdmin.Auth;

namespace SeuProjeto.Controllers // Ajuste para o seu namespace
{
    [ApiController]
    [Route("api/[controller]")] // Isso transforma a rota base em: api/auth
    public class AuthController : ControllerBase // Alterado para ControllerBase
    {
        // O [HttpGet] Login foi removido, pois o Angular cuida da tela de Login.

        [HttpPost("validar-token")] // Rota final: api/auth/validar-token
        public async Task<IActionResult> ValidarToken([FromBody] TokenRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.IdToken))
            {
                return BadRequest(new { success = false, message = "O token não foi fornecido." });
            }

            try
            {
                // Valida o token recebido do Angular usando o SDK do Firebase
                FirebaseToken decodedToken = await FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(request.IdToken);
                
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, decodedToken.Uid),
                    new Claim(ClaimTypes.Name, decodedToken.Claims.ContainsKey("email") ? decodedToken.Claims["email"]?.ToString() : "")
                };

                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                
                // Cria o cookie de sessão que será enviado de volta para o Angular
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));

                return Ok(new { success = true, message = "Autenticado com sucesso" });
            }
            catch (Exception ex)
            {
                return Unauthorized(new { success = false, message = "Token inválido ou expirado: " + ex.Message });
            }
        }

        [HttpPost("logout")] // Rota final: api/auth/logout
        public async Task<IActionResult> Logout()
        {
            // Limpa o cookie no navegador do cliente
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            
            // Retorna um OK para o Angular saber que deslogou, em vez de redirecionar para uma View
            return Ok(new { success = true, message = "Logout realizado com sucesso" });
        }
    }

    public class TokenRequest
    {
        public string IdToken { get; set; }
    }
}