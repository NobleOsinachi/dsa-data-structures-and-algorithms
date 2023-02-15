using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DSA
{
    public class Student
    {
        public Student()
        {
            this.Program = "Undergraduate";
            this.RegisteredCourses = ["GEG 102", "MEG 104"];
            this.Semester = Semester.First;

        }
        public int Id { get; set; }
        public int FirstName { get; set; }
        public int LastName { get; set; }
        public int MatricNo { get; set; }
        public string Program { get; set; }
        public Semester Semester { get; set; }
        public string[] RegisteredCourses { get; set; }
        public decimal[] Grades { get; set; }


        public stvoid Main(string[] args)
        {

        }


    }




    public enum Semester
    {
        First = 1,

        Second = 2
    }
}