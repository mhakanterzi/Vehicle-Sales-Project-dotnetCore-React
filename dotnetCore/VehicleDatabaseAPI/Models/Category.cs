using System.ComponentModel.DataAnnotations;

namespace VehicleDatabaseAPI.Models
{
    public class Category
    {
        [Key]
        [StringLength(100)]
        public string CategoryName { get; set; }

        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
    }
}
