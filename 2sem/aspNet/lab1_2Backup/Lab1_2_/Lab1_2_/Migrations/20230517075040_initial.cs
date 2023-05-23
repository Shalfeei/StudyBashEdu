using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Lab1_2_.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Genre = table.Column<int>(type: "int", nullable: true),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Description", "Genre", "Title" },
                values: new object[,]
                {
                    { new Guid("150c81c6-2458-466e-907a-2df11325e2b8"), "Роберт К. Мартин", "Даже плохой программный код может работать. Однако если код не является \"чистым\", это всегда будет мешать развитию проекта и компании-разработчика, отнимая значительные ресурсы на его поддержку и \"укрощение\". Эта книга посвящена хорошему программированию.", 12, "Чистый код: создание, анализ и рефакторинг" },
                    { new Guid("ab1c3abc-b08b-4436-a6ab-8cce7ec8fb47"), "Джоан Роулинг", "Четвёртая книга о приключениях Гарри Поттера, написанная английской писательницей Джоан Роулинг. В Англии опубликована в 2000 году. По сюжету Гарри Поттер против своей воли вовлекается в участие в Турнире Трёх Волшебников, и ему предстоит не только сразиться с более опытными участниками, но и разгадать загадку того, как он вообще попал на турнир вопреки правилам.", 0, "Гарри Поттер и кубок огня" },
                    { new Guid("be281fe9-4ffa-4dda-8478-6e1b877c03c1"), "Антон Павлович Чехов", "СТАРАЯ, НО ВЕЧНО НОВАЯ ИСТОРИЯ", 10, "Который из трех?" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
