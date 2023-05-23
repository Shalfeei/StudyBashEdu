using System.ComponentModel.DataAnnotations;

namespace Lab1_2_.Models
{
    public class Book
    {
        [Key]
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public Genre? Genre { get; set; }
        public string? Author { get; set; }
    }
}
