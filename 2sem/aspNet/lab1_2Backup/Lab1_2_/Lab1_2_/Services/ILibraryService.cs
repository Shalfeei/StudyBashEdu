using Lab1_2_.Models;

namespace Lab1_2_.Services
{
    public interface ILibraryService
    {

        Task<List<Book>> GetBooksAsync(); // GET
        Task<Book> GetBookAsync(Guid id); // GET по ID
        Task<Book> AddBookAsync(Book book); // POST
        Task<Book> UpdateBookAsync(Book book); // PUT
        Task<(bool, string)> DeleteBookAsync(Book book); // DELETE
    }
}
