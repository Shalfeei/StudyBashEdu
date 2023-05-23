using Lab1_2_.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_2_.Data
{
    public class DbInitializer
    {
        private readonly ModelBuilder _builder;

        public DbInitializer(ModelBuilder builder)
        {
            _builder = builder;
        }

        public void Seed()
        {
            _builder.Entity<Book>(b =>
            {
                b.HasData(new Book
                {
                    Id = new Guid("AB1C3ABC-B08B-4436-A6AB-8CCE7EC8FB47"),
                    Title = "Гарри Поттер и кубок огня",
                    Description = "Четвёртая книга о приключениях Гарри Поттера, написанная английской писательницей Джоан Роулинг. В Англии опубликована в 2000 году. По сюжету Гарри Поттер против своей воли вовлекается в участие в Турнире Трёх Волшебников, и ему предстоит не только сразиться с более опытными участниками, но и разгадать загадку того, как он вообще попал на турнир вопреки правилам.",
                    Genre = Genre.Fantasy,
                    Author = ("Джоан Роулинг")
                });
                b.HasData(new Book
                {
                    Id = new Guid("BE281FE9-4FFA-4DDA-8478-6E1B877C03C1"),
                    Title = "Который из трех?",
                    Description = "СТАРАЯ, НО ВЕЧНО НОВАЯ ИСТОРИЯ",
                    Genre = Genre.Humor,
                    Author = "Антон Павлович Чехов"
                });
                b.HasData(new Book
                {
                    Id = new Guid("150c81c6-2458-466e-907a-2df11325e2b8"),
                    Title = "Чистый код: создание, анализ и рефакторинг",
                    Description = "Даже плохой программный код может работать. Однако если код не является \"чистым\", это всегда будет мешать развитию проекта и компании-разработчика, отнимая значительные ресурсы на его поддержку и \"укрощение\". Эта книга посвящена хорошему программированию.",
                    Genre = Genre.IT,
                    Author = "Роберт К. Мартин"
                });
            });
        }
    }
}
