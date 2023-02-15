using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;
using System.Threading.Tasks;

namespace DSA
{
    class Program
    {
        static void Main(string[] args)
        {
            // The code provided will print ‘Hello World’ to the console.
            // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.

            // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 

            Person x = new Person();
            x.FirstName = "Noble";
            x.LastName = "Chukwukere";
            Console.Write("Hello, ");

           Console.WriteLine( GetEmployeeName(x) + "!" );

            Console.ReadKey();
            }

      static  string GetEmployeeName (Person person){
            return person.FirstName + " " + person.LastName;
        }


    }
}
