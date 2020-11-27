using ConnectWorkApi.Models;
using System;
using System.Linq;

namespace ConnectWorkApi.Data
{
    public class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Contratantes.Any())
            {
                return;   // DB has been seeded
            }

            var contratantes = new Contratante[]
            {
            new Contratante{Nome="Carson",Email="Alexander"},
            new Contratante{Nome="Meredith",Email="Alonso"},

            };
            foreach (Contratante s in contratantes)
            {
                context.Contratantes.Add(s);
            }
            context.SaveChanges();

     
        }
    }


}