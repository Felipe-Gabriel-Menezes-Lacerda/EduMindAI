using EduMindAi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSingleton<FirebaseService>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/error");
    app.UseHsts();
}

app.Map("/error", () => Results.Problem());

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapGet("/api/firebase/ping", async (FirebaseService firebaseService) =>
{
    var db = await firebaseService.GetFirestoreDbAsync();
    return Results.Ok(new { projectId = db.ProjectId });
});

app.MapControllers();

app.Run();
