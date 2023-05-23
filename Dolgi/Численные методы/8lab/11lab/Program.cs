using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _11lab
{
    class Program
    {
        static int n = 40;

        static double[]
            y = new double[n],
            y1 = new double[n],
            y2 = new double[n],
            y3 = new double[n],
            y4 = new double[n];

        static double x = 0.2, delta = 0.035;

        static void Y()
        {
            for (int i = 0; i < n; i++)
            {
                y[i] = Math.Pow(Math.Cos(2.8 - 2.5 * x), 2) / (2.5 + Math.Sqrt(x * x + 40));
                x = Math.Round(x + delta, 5);
            }
            x = 0.2;
        }

        static void Y1()
        {
            for (int i = 0; i < n - 1; i++)
            {
                y1[i] = (y[i + 1] - y[i]) / delta;
                x = Math.Round(x + delta, 5);
            }
            x = 0.2;
        }



        static void Y2()
        {
            for (int i = 0; i < n - 2; i++)
            {
                y2[i] = (y1[i + 1] - y1[i]) / delta;
                x = Math.Round(x + delta, 5);
            }
            x = 0.2;
        }

        static void Y3()
        {
            for (int i = 0; i < n - 3; i++)
            {
                y3[i] = (y2[i + 1] - y2[i]) / delta;
                x = Math.Round(x + delta, 5);
            }
            x = 0.2;
        }

        static void Y4()
        {
            for (int i = 0; i < n - 4; i++)
            {
                y4[i] = (y3[i + 1] - y3[i]) / delta;
                x = Math.Round(x + delta, 5);
            }
            x = 0.2;
        }

        static void Main(string[] args)
        {
            Y(); Y1(); Y2(); Y3(); Y4();

            double
                max_left = double.NegativeInfinity,
                max_right = double.NegativeInfinity,
                max_y2 = double.NegativeInfinity,
                max_y4 = double.NegativeInfinity;

            for (int i = 0; i < n; i++)
            {
                if (max_left < Math.Abs(y1[i]) && i < 40)
                    max_left = Math.Round(Math.Abs(y1[i]), 9);

                if (max_right < Math.Abs(y1[i]) && i > 0 && i < 41)
                    max_right = Math.Round(Math.Abs(y1[i]), 9);

                if (max_y2 < Math.Abs(y2[i]) && i < 41)
                    max_y2 = Math.Round(Math.Abs(y2[i]), 9);

                if (max_y4 < Math.Abs(y4[i]) && i < 41)
                    max_y4 = Math.Round(Math.Abs(y4[i]), 9);
            }

            Console.WriteLine("max_лев(y') = {0}\nmax_прав(y') = {1}\nmax(y'') = {2}\nmax(y(4)) = {3}", max_left, max_right, max_y2, max_y4);
            Console.ReadLine();
        }


    }
}
