using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace VehicleDatabaseAPI.Models
{
    public class Vehicle
    {
        [Key]
        [StringLength(100)]
        public string Plate { get; set; }

        [StringLength(100)]
        public string Brand { get; set; }

        [StringLength(100)]
        public string Model { get; set; }

        public int Year { get; set; }

        public string CategoryName { get; set; }

    }
}
