using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CalcController : ControllerBase
    {
        private MyDbContext context;

        public CalcController(MyDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public MyData Sum(int a, int b)
        {
            return new MyData()
            {
                Sum = a + b,
                Description = "Счастье"
            };
        }

        [HttpPost("add")]
        public int Add(MyData data)
        {
            context.Add(data);
            context.SaveChanges();
            return data.Id;
        }

        [HttpGet("read")]
        public MyData Read(int id)
        {
            return context.Data.Find(id);
        }

    }
}

public class MyData
{
    public int Id { get; set; }
    public int Sum { get; set; }
    public string Description { get; set; }
}