
using Microsoft.EntityFrameworkCore;
using ConnectWorkApi.Models;

namespace ConnectWorkApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {}
        public DbSet<Contratante> Contratantes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contratante>().ToTable("Contratantes");
            
        }
    }


}