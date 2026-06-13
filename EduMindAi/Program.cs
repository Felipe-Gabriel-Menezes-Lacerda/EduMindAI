var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("error");
    app.UseHsts();
}

app,Map("/error", () => Results.Problem())

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapControllers();


app.Run();
