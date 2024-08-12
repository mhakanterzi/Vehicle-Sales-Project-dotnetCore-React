using Microsoft.AspNetCore.Mvc;
using VehicleDatabaseAPI.Models;
using VehicleDatabaseAPI.Data;
using System.Linq;


namespace VehicleDatabaseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleSaleInfoController : ControllerBase
    {
        private readonly VehicleDbContext _context;

        public VehicleSaleInfoController(VehicleDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetSaleInfos()
        {
            var sales = _context.VehicleSaleInfo.ToList();
            return Ok(sales);
        }

        [HttpGet("plate")]
        public IActionResult GetSaleInfo(string plate)
        {
            var sale = _context.VehicleSaleInfo.Find(plate);
            if (plate == null)
            {
                return NotFound();
            }
            return Ok(sale);
        }

        [HttpPost]
        public IActionResult PostsaleInfo(VehicleSaleInfo info)
        {
            _context.VehicleSaleInfo.Add(info);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetSaleInfo), new { plate = info.Plate }, info);
        }

        [HttpPut("plate")]
        public IActionResult PutSaleInfo(string plate, VehicleSaleInfo info)
        {
            if (plate != info.Plate)
            {
                return BadRequest();
            }
            _context.Entry(info).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("plate")]
        public IActionResult DeleteInfo(string plate)
        {
            var info = _context.VehicleSaleInfo.FirstOrDefault(i => i.Plate == plate);
            if (plate == null)
            {
                return NotFound();
            }
            _context.VehicleSaleInfo.Remove(info);
            _context.SaveChanges();
            return NoContent();
        }

    }
}
