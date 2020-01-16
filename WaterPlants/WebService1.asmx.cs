using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Script.Serialization;
using System.Web.Services;
using WaterPlants.Models;
using System.Collections.Generic;
using System;

namespace WaterPlants
{
    
    public class WebService1 : System.Web.Services.WebService
    {
       
        [WebMethod]
        public void GetAllPlants()
        {
            List<Plant> plantList = new List<Plant>();
            string CS = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(CS))

            {
                con.Open();
                string query = "SELECT * FROM MainPlant";
                SqlDataAdapter cmd = new SqlDataAdapter(query,con);
                DataTable dt = new DataTable();
                cmd.Fill(dt);
               
                
               
                foreach (DataRow dr in dt.Rows)
                {
                    Plant plant = new Plant();
                    plant.P_ID = Convert.ToInt32(dr[0]);
                    plant.Plantname = dr[1].ToString();
                    plant.Active = Convert.ToBoolean(dr[2]);
                    plant.Start_Time =Convert.ToDateTime(dr[3]);
                    plant.End_Time = Convert.ToDateTime(dr[4]);
                    plant.Time_Diff = Convert.ToDateTime(dr[5]);

                    plantList.Add(plant);
                }
               

                
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(plantList));
        }

        [WebMethod]

        public void UpdateDataPlantByID(int id) {
            
            DateTime time = DateTime.Now;
           
            string CS = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(CS))
            {
                try
                {
                    con.Open();
                    string query = "update MainPlant set Active = 1, Start_Time = convert(datetime,'" + time + "') , End_Time = DATEADD(ss,30,'" + time + "'), Time_Diff = End_Time - Start_Time where P_ID ='" + id + "'";

                    SqlCommand command = new SqlCommand(query, con);

                    command.ExecuteNonQuery();
                    con.Close();
                  
                }
                catch (Exception e) {
                   
                }
            }
           
        }

        [WebMethod]

        public void getActiveState(int id)
        {

            DateTime time = DateTime.Now;

            string CS = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(CS))
            {
                try
                {
                    con.Open();
                    string query = "Select ";

                    SqlCommand command = new SqlCommand(query, con);

                    command.ExecuteNonQuery();
                    con.Close();

                }
                catch (Exception e)
                {

                }
            }

        }


    }
}
