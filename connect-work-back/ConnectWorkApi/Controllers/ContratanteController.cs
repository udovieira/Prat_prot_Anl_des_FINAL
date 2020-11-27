using ConnectWorkApi.Data;
using ConnectWorkApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConnectWorkApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContratanteController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ContratanteController(AppDbContext context)
        {
            _context = context;
        }
        // GET: api/Contratante
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contratante>>> GetContratantes()
        {
            return await _context.Contratantes.ToListAsync();
        }

        // POST: api/Contratante

        [HttpPost]
        public async Task<ActionResult<Contratante>> PostContratante(Contratante contratante)
        {
            _context.Contratantes.Add(contratante);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodoItem", new { id = contratante.ContratanteId }, contratante);        }
    }
}