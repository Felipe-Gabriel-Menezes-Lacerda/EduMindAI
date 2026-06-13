using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Authentication.Cookies;
using EduMindAi.Services;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddSingleton<FirebaseService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // URL do seu Angular
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // Obrigatório para enviar Cookies/Autenticação
    });
});

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Account/Login";
    });

builder.Services.AddControllers();

var app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/error");
    app.UseHsts();
}

FirebaseApp.Create(new AppOptions()
{
    Credential = GoogleCredential.FromFile("edumind-ai-d05f8-firebase-adminsdk-fbsvc-3cd0bc519c.json")
});

app.Map("/error", () => Results.Problem());

app.UseHttpsRedirection();
app.UseRouting();

app.UseCors("AngularApp");

app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/api/firebase/ping", async (FirebaseService firebaseService) =>
{
    var db = await firebaseService.GetFirestoreDbAsync();
    return Results.Ok(new { projectId = db.ProjectId });
});

app.MapControllers();
app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
