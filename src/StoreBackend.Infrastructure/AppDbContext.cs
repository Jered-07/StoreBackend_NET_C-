using Microsoft.EntityFrameworkCore;
using StoreBackend.Domain.Entities;

public class AppDbContext : DbContext
{
    public AppDbContext(
        DbContextOptions<AppDbContext> options
    ) : base(options)
    {
    }
 
    public DbSet<Product> Products { get; set; } = null!;
}