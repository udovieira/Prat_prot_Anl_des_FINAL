using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace ConnectWorkApi.Models
{
    public class Contratado
    {
        public int ContratadoId { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Senha { get; set; }
        public string TipoUsuario { get; set; }
        public string Endereco { get; set; }
        public List<string> Servicos { get; set; }
        public List<string> Satisfacao { get; set; }
    }
}