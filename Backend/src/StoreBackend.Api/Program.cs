using Microsoft.EntityFrameworkCore;
using StoreBackend.DomainService;
using StoreBackend.Facade;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowedOriginsPolicy", policy =>
    {
        policy.WithOrigins(allowedOrigins!).AllowAnyHeader().AllowAnyMethod();
    });
});
builder.Services.AddOpenApi();


builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

// Repositories
builder.Services.AddScoped<IProductRepository, ProductRepository>();

// Services
builder.Services.AddScoped<IProductService, ProductService>();

// Facades
builder.Services.AddScoped<IProductFacade, ProductFacade>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("AllowedOriginsPolicy");

app.UseAuthorization();

app.MapControllers();



app.Run();