using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WaterPlants.Models
{
    public class Plant
    {
        public  int P_ID { get; set; }
        public  string Plantname { get; set; }
        public  bool Active { get; set; }
        public  DateTime Start_Time { get; set; }
        public  DateTime End_Time { get; set; }
        public  DateTime Time_Diff { get; set; }
    }
}