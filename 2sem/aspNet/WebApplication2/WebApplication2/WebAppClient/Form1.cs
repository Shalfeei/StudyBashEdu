using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WebAppClient
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        HttpClient client = new HttpClient();

        private async void button1_Click(object sender, EventArgs e)
        {
            using HttpResponseMessage response = await client.GetAsync(new Uri("http://localhost:5000/WeatherForecast"));

           
            response.EnsureSuccessStatusCode();

            textBox1.Text = await response.Content.ReadAsStringAsync();
        }
    }
}
