using System;

namespace DatingApp.API.Dtos
{
    public class PhotsForDetailedDto
    {
         public int Id { get; set; }

        public string Url { get; set; }

        public DateTime DateAdded  { get; set; }

        public bool IsMain  { get; set; } 
    }
}