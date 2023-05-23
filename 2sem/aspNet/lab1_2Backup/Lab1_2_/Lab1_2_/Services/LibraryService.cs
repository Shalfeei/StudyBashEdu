using Lab1_2_.Data;
using Lab1_2_.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_2_.Services
{
    public class LibraryService : ILibraryService
    {
        private readonly AppDbContext _db;

        public LibraryService(AppDbContext db)
        {
            _db = db;
        }

        public async Task<List<Book>> GetBooksAsync()
        {
            try
            {
                return await _db.Books.ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Book> GetBookAsync(Guid id)
        {
            try
            {
                return await _db.Books.FindAsync(id);
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Book> AddBookAsync(Book book)
        {
            try
            {
                await _db.Books.AddAsync(book);
                await _db.SaveChangesAsync();
                return await _db.Books.FindAsync(book.Id); //возвращает книгу с id, присвоенным самой БД
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<Book> UpdateBookAsync(Book book)
        {
            try
            {
                _db.Entry(book).State = EntityState.Modified;
                await _db.SaveChangesAsync();

                return book;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<(bool, string)> DeleteBookAsync(Book book)
        {
            try
            {
                var dbBook = await _db.Books.FindAsync(book.Id);

                if (dbBook == null)
                {
                    return (false, "Книга не найдена");
                }

                _db.Books.Remove(book);
                await _db.SaveChangesAsync();

                return (true, "Книга успешно удалена");
            }
            catch (Exception ex)
            {
                return (false, $"Error: {ex.Message}");
            }
        }
    }
}
