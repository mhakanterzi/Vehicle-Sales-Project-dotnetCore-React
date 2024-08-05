using Microsoft.EntityFrameworkCore;
using VehicleDatabaseAPI.Models;

namespace VehicleDatabaseAPI.Data
{
    public class VehicleDbContext : DbContext
    {
        public VehicleDbContext(DbContextOptions<VehicleDbContext> options)
            : base(options)
        {
        }

        public DbSet<Customer> Customer { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


        }
    }
}
