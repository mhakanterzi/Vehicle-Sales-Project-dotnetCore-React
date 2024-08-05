using System.ComponentModel.DataAnnotations;

namespace VehicleDatabaseAPI.Models
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }

        [StringLength(100)]
        public string FirstName { get; set; }

        [StringLength(100)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }

        [Required]
        [StringLength(100)]
        public string Password { get; set; }

        [Required]
        public long Phone { get; set; }
    }
}
