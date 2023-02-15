using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DSA
{
    public class Person
    {
        public int Id { get; set; }
        public int FullName { get; set; }
        /// <summary>
        /// Mass in kilograms (kg)
        /// </summary>
        public float Mass { get; set; }
        /// <summary>
        /// Height in metres (m)
        /// </summary>
        public float Height { get; set; }


        public float CalculateBMI()
        {
            return this.Mass / (this.Height * this.Height);
        }
    }
}
