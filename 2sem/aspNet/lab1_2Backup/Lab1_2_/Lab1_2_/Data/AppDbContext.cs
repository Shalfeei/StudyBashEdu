using Lab1_2_.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_2_.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //наполняем БД начальными данными
            new DbInitializer(builder).Seed();
        }
    }
}
