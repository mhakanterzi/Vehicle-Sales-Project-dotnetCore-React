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

        // GET: api/Customer
        [HttpGet]
        public IActionResult GetCustomers()
        {
            var customers = _context.Customer.ToList();
            return Ok(customers);
        }

        // GET: api/Customer/5
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

        // POST: api/Customer
        [HttpPost]
        public IActionResult PostCustomer(Customer customer)
        {
            _context.Customer.Add(customer);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCustomer), new { id = customer.CustomerID }, customer);
        }

        // PUT: api/Customer/5
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

        // DELETE: api/Customer/5
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
