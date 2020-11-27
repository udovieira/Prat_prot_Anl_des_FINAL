
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ConnectWorkApi.Models
{
    public class Contratante
    {
        public int ContratanteId { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }

    }
}