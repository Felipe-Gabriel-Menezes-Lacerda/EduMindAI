using EduMintAI.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("EduMintCors", policy =>
    {
        var origins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>() ?? ["http://localhost:4200"];
        policy.WithOrigins(origins).AllowAnyHeader().AllowAnyMethod();
    });
});

builder.Services.AddSingleton<FirebaseService>();
builder.Services.AddSingleton<SeedDataService>();
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<DiagnosticoService>();
builder.Services.AddScoped<TrilhaService>();
builder.Services.AddScoped<DashboardService>();
builder.Services.AddScoped<IaService>();
builder.Services.AddScoped<GincanaService>();
builder.Services.AddScoped<RankingService>();
builder.Services.AddScoped<MissaoService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("EduMintCors");
app.MapControllers();

app.MapGet("/", () => Results.Ok(new
{
    app = "EduMint AI API",
    status = "online",
    docs = "/swagger",
    mockRepository = builder.Configuration.GetValue<bool>("Firebase:UseMockRepository", true)
}));

app.Run();
