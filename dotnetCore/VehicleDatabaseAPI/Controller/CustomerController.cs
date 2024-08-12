using Microsoft.AspNetCore.Mvc;
using VehicleDatabaseAPI.Models;
using VehicleDatabaseAPI.Data;
using System.Linq;

namespace VehicleDatabaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly VehicleDbContext _context;

        public CustomerController(VehicleDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCustomers()
        {
            var customers = _context.Customer.ToList();
            return Ok(customers);
        }

        [HttpGet("{id}")]
        public IActionResult GetCustomer(int id)
        {
            var customer = _context.Customer.Find(id);
            if (customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        [HttpPost]
        public IActionResult PostCustomer(Customer customer)
        {
            _context.Customer.Add(customer);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCustomer), new { id = customer.CustomerID }, customer);
        }

        [HttpPut("{id}")]
        public IActionResult PutCustomer(int id, Customer customer)
        {
            if (id != customer.CustomerID)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var customer = _context.Customer.Find(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customer.Remove(customer);
            _context.SaveChanges();
            return NoContent();
        }

    }


}
