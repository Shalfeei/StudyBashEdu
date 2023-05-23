using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _8lab
{
    class Program
    {
        static int Fact(int a)
        {
            int fact = 1;

            for (int i = 1; i <= a; i++)
			{
                fact *= i;
			}

            return fact;
        }

        static void Main(string[] args)
        {
            Console.Write("Введите количество значений x и y: ");
            int n = int.Parse(Console.ReadLine());

            double[] 
                x = new double[n], 
                y = new double[n], 
                diff = new double[n], 
                q = new double[n], 
                s_k = new double[n];

            Console.Write("Введите кси: ");
            double xi = double.Parse(Console.ReadLine());
            
            for (int i = 0; i < n; i++)
            {
                Console.Write("x[{0}] = ", i);
                x[i] = double.Parse(Console.ReadLine());

                Console.Write("y[{0}] = ", i);
                y[i] = double.Parse(Console.ReadLine());
                
                diff[i] = y[i];
            }

            double h = (x[n - 1] - x[0]) / (n - 1);

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n - i - 1; j++)
                {
                    diff[j] = diff[j + 1] - diff[j];
                }       

                q[i] = (xi - x[n - i - 1]) / h;
            }

            double sum = 0; 

            for (int i = 0; i < n; i++)
            {
                if (i == 0) s_k[0] = 1;
                else if (i == 1) s_k[1] = q[0];
                else s_k[i] = s_k[i - 1] * q[i - 1];

                sum += s_k[i] / Fact(i) * diff[n - i - 1];
            }

            Console.WriteLine("F({0}) = {1}", xi, sum);
            Console.ReadKey();
        }
    }
}
