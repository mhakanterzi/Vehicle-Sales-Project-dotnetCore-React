using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VehicleDatabaseAPI.Models
{
    public class VehicleSaleInfo
    {
        [Key]
        [StringLength(100)]
        public string Plate { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal? Price { get; set; }
        public bool onSale { get; set; }
    }
}
