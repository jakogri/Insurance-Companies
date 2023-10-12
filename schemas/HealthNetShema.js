var mongoose = require('mongoose');
var db = mongoose.connection;


function ConnectToBase(dbusername, password, host, port, database)
{
    var ConnectString = 'mongodb://';
    if ((dbusername != '') && (password != ''))
        ConnectString = ConnectString + dbusername + ':' + password + '@';
    ConnectString = ConnectString + host;
    if (port != '') ConnectString = ConnectString + ':' + port;
    ConnectString = ConnectString + '/' + database;
   ///db = mongoose.createConnection(ConnectString);
   mongoose.connect(ConnectString);
   db.on("error", console.error.bind(console, "connection error:"));
   db.once("open", function callback () {
    console.log("Connected!")
  });
};


var Schema = mongoose.Schema;

var schema = new Schema({
    User: String,
    Path: String,
    Plan: String,
    
    PLAN_MAXIMUMS:
   {
       Calendar_year_deductible:
     {
         In_network:
      {
          Member: String,
          Family: String
      },
         Out_of_network:
      {
          Member: String,
          Family: String
      }
     },
       Out_of_pocket_maximum:
    {
        In_network:
     {
         Member: String,
         Family: String
     },
        Out_of_network:
     {
         Member: String,
         Family: String
     }
    },
       Lifetime_benefit_maximum:
    {
        In_network: String,
        Out_of_network:
     {
         Family: String
     }

    }
   },
    PROFESSIONAL_SERVICES:
   {
       Ambulance_services:
    {
        In_network: String,
        Out_of_network: String
    },
       CVS_MinuteClinic_physician_visit:
    {
        In_network: String
    },
       Emergency_room_facility:
    {
        In_network: String
    },
       Office_visit_copay:
    {
        In_network: String
    },
       Office_visit:
    {
        In_network: String,
        Out_of_network: String
    },
       Preventive_care_services_for_adults:
    {
        In_network: String,
        Out_of_network: String
    },
       Preventive_care_services_for_children:
    {
        In_network: String,
        Out_of_network: String
    },
       Preventive_care_services:
    {
        In_network: String,
        Out_of_network: String
    },
       Rehabilitation_therapy:
    {
        In_network: String,
        Out_of_network: String
    },
       Self_injectable_drugs:
    {
        In_network: String,
        Out_of_network: String
    },
       Self_injectables:
    {
        In_network: String,
        Out_of_network: String
    },
       Specialist_consultation:
    {
        In_network: String,
        Out_of_network: String
    },
       Specialist_visit:
    {
        In_network: String
    },
       Urgent_car_facility:
    {
        In_network: String
    },
       Visits__$:
    {
        In_network: String
    },
       X_ray_and_laboratory_procedures:
    {
        In_network: String,
        Out_of_network: String
    },
       Rehabilitation_and_habilitation_therapy:
    {
        In_network: String,
        Out_of_network: String
    }
   },
    HOSPITAL_SERVICES:
   {
       Inpatient_hospital_facility_services:
    {
        In_network: String,
        Out_of_network: String
    },
       Inpatient_hospital_stay:
    {
        In_network: String
    },
       Inpatient_care:
    {
        In_network: String
    },
       Outpatient_facility_services:
    {
        In_network: String,
        Out_of_network: String
    },
       Outpatient_surgery:
    {
        In_network: String,
        Out_of_network: String
    },
       Skilled_nursing_facility:
    {
        In_network: String,
        Out_of_network: String
    }
   },
    EMERGENCY_SERVICES:
 {
     Emergency_room:
  {
      In_network: String,
      Out_of_network: String
  },
     Urgent_care:
  {
      In_network: String,
      Out_of_network: String
  },
     Menta_Behavioral_health_Substance_use_disorder:
  {
      In_network: String,
      Out_of_network: String
  },
     Ambulance_services:
  {
      In_network: String,
      Out_of_network: String
  }
 },
    BEHAVIORAL_SERVICES:
 {
     Acute_care_detoxif_ication:
  {
      In_network: String
  },
     Chemical_dependency_rehabilitation:
  {
      In_network: String
  },
     Mental_health_Chemical_dependency_rehabilitation_inpatient:
  {
      In_network: String,
      Out_of_network: String
  },
     Non_severe_mental_health:
  {
      In_network: String
  },
     Severe_mental_health:
  {
      In_network: String
  }
 },
    BEHAVIORAL_MENTAL_HEALTH:
 {
     Acute_care_detoxification:
  {
      In_network: String,
      Out_of_network: String
  },
     Chemical_dependency_rehabilitation:
  {
      In_network: String,
      Out_of_network: String
  },
     Non_severe_mental_health:
  {
      In_network: String,
      Out_of_network: String
  },
     Severe_mental_health:
  {
      In_network: String,
      Out_of_network: String
  }
 },
    MENTAL_BEHAVIORAL_HEALTH_SUBSTANCE_USE_DISORDER_SERVICES:
 {
     Mental_Behavioral_health_Substance_use_disorder_office_visit:
  {
      In_network: String
  },
     Mental_Behavioral_health_Substance_use_disorder:
  {
      In_network: String
  }
 },
    HOME_HEALTH_CARE_SERVICES:
 {
     Out_of_network: String
 },
    OTHER_SERVICES:
 {
     Durable_medical_equipment:
  {
      In_network: String,
      Out_of_network: String
  },
     Orthotics_and_prosthetics:
  {
      In_network: String,
      Out_of_network: String
  },
     Orthotics:
  {
      In_network: String,
      Out_of_network: String
  },
     Diabetic_equipment:
  {
      In_network: String,
      Out_of_network: String
  },
     Diabetic_supplies:
  {
      In_network: String,
      Out_of_network: String
  },
     Acupuncture_and_chiropratic_services:
  {
      In_network: String
  },
     Acupuncture:
  {
      In_network: String,
      Out_of_network: String
  },
     Chiropractic_services:
  {
      In_network: String,
      Out_of_network: String
  },
     Prosthetics:
  {
      In_network: String,
      Out_of_network: String
  },
     Self_injectables:
  {
      In_network: String
  },
     Specialty_drugs:
  {
      In_network: String
  }
 },
    OUTPATIENT_SERVICES:
 {
     Outpatient_surgery:
  {
      In_network: String
  },
     Skilled_nursing_facility:
  {
      In_network: String
  }
 },
    PRESCRIPTION_DRUG_COVERAGE:
 {
     Brand_name_calendar_year_deductible:
  {
      In_network:
      {
          Member: String,
          Family: String
      },
      Out_of_network:
      {
          Member: String,
          Family: String
      }
  },
     Calendar_year_deductible:
  {
      In_network: String,
      Out_of_network: String
  },
     Pediatric_dental_Diagnostic_and_preventive_services:
  {
      In_network: String,
      Out_of_network: String
  },
     Plans_calendar_year_deductible_applies_to_all_prescription_drug_tiers:
  {
      In_network: String
  },
     Prescription_drug_deductible:
  {
      In_network: String
  },
     Prescription_drugs:
  {
      In_network: String,
      Out_of_network: String
  },
     Specialty_drugs:
  {
      Out_of_network: String
  },
     deductible_applies_to_all_prescription_drug_tiers:
  {
      In_network: String
  }
 },
    PEDIATRIC_DENTAL:
 {
     Diagnostic_and_preventive_services:
  {
      In_network: String
  }
 },
    PEDIATRIC_VISION:
 {
     Eye_exam:
  {
      In_network: String,
      Out_of_network: String
  },
     Glasses:
  {
      In_network: String,
      Out_of_network: String
  },
     Routine_eye_exam:
  {
      In_network: String
  }
 },
    Unlimited_lifetime_maximum:
 {
     In_network: String,
     Out_of_network: String
 }
});

var HealthNet = mongoose.model('HealthNet', schema);
  
exports.SaveHealthNet = function(dbusername, password, host, port, database, array)
{
  ConnectToBase(dbusername, password, host, port, database);
  console.log("Этап 1");
 HealthNet.remove({ User: array[0], Path:array[1] , Plan:array[3] }, function (err) {
  if (err) return handleError(err);
  });
  console.log("Этап 2");
  var NewHealthNet = new HealthNet({
   User: array[0],
   Path: array[1],
   Plan: array[2],
   PLAN_MAXIMUMS:
   {
     Calendar_year_deductible:
     {
      In_network:
      {
       Member: array[3],
       Family: array[4] 
      }, 
      Out_of_network:
      {
       Member: array[5],
       Family: array[6]    
      } 
     },
    Out_of_pocket_maximum:
    {
     In_network:
     {
      Member: array[7],
      Family: array[8] 
     }, 
     Out_of_network:
     {
      Member: array[9],
      Family: array[10]    
     }    
    },
    Lifetime_benefit_maximum:
    {
     In_network: array[11],
     Out_of_network:
     {
      Family: array[12]
     }
       
    }     
   },   
   PROFESSIONAL_SERVICES:
   {
    Ambulance_services:
    {
     In_network: array[13],
     Out_of_network:array[14]    
    }, 
    CVS_MinuteClinic_physician_visit:
    {
     In_network: array[15]   
    },
    Emergency_room_facility:
    {
     In_network: array[16]   
    },
    Office_visit_copay:
    {
     In_network: array[17]   
    },
    Office_visit:
    {
     In_network: array[18],
     Out_of_network:array[19]     
    },
    Preventive_care_services_for_adults:
    {
     In_network: array[20],
     Out_of_network:array[21]    
    },
    Preventive_care_services_for_children:
    {
     In_network: array[22],
     Out_of_network:array[23]    
    },
    Preventive_care_services:
    {
     In_network: array[24],
     Out_of_network:array[25]     
    },
    Rehabilitation_therapy:
    {
     In_network: array[26],
     Out_of_network:array[27]   
    },
    Self_injectable_drugs:
    {
     In_network: array[28],
     Out_of_network:array[29]   
    },
    Self_injectables:
    {
     In_network: array[30],
     Out_of_network:array[31]   
    },
    Specialist_consultation:
    {
     In_network: array[32],
     Out_of_network:array[33]     
    },
     Specialist_visit:
    {
     In_network: array[34]
    },
    Urgent_car_facility:
    {
     In_network: array[35]   
    },
    Visits__$:
    {
     In_network: array[36]   
    },
    X_ray_and_laboratory_procedures:
    {
     In_network: array[37],
     Out_of_network:array[38]   
    },
    Rehabilitation_and_habilitation_therapy:
    {
     In_network: array[39],
     Out_of_network:array[40]   
    }
   },
  HOSPITAL_SERVICES:
   {
    Inpatient_hospital_facility_services:
    {
     In_network: array[41],
     Out_of_network:array[42]   
    },
    Inpatient_hospital_stay:
    {
     In_network: array[43]   
    },
    Inpatient_care:
    {
     In_network: array[44]    
    },
    Outpatient_facility_services:
    {
     In_network: array[45],
     Out_of_network:array[46]     
    },
    Outpatient_surgery:
    {
     In_network: array[47],
     Out_of_network:array[48]    
    },
    Skilled_nursing_facility:
    {
     In_network: array[49],
     Out_of_network:array[50]   
    }  
   },
 EMERGENCY_SERVICES:
 {
  Emergency_room:
  {
   In_network: array[51],
   Out_of_network:array[52]    
  },
  Urgent_care:
  {
   In_network: array[53],
   Out_of_network:array[54]   
  },
  Menta_Behavioral_health_Substance_use_disorder:
  {
   In_network: array[55],
   Out_of_network:array[56]     
  },
  Ambulance_services:
  {
   In_network: array[57],
   Out_of_network:array[58]   
  }
 },
 BEHAVIORAL_SERVICES:
 {
  Acute_care_detoxif_ication:
  {
   In_network: array[59]   
  },
  Chemical_dependency_rehabilitation:
  {
   In_network: array[60]
  }, 
  Mental_health_Chemical_dependency_rehabilitation_inpatient:
  {
   In_network: array[61],
   Out_of_network:array[62]   
  },
  Non_severe_mental_health:
  {
   In_network: array[63]   
  },
  Severe_mental_health:
  {
   In_network: array[64]   
  }
 },
 BEHAVIORAL_MENTAL_HEALTH:
 {
  Acute_care_detoxification:
  {
   In_network: array[65],
   Out_of_network:array[66]   
  },
  Chemical_dependency_rehabilitation:
  {
   In_network: array[67],
   Out_of_network:array[68]   
  },
  Non_severe_mental_health:
  {
   In_network: array[69],
   Out_of_network:array[70]     
  },
  Severe_mental_health:
  {
   In_network: array[71],
   Out_of_network:array[72]   
  }
 },
 MENTAL_BEHAVIORAL_HEALTH_SUBSTANCE_USE_DISORDER_SERVICES:
 {
  Mental_Behavioral_health_Substance_use_disorder_office_visit:
  {
   In_network: array[73]   
  },
  Mental_Behavioral_health_Substance_use_disorder:
  {
   In_network: array[74]   
  }
 },
 HOME_HEALTH_CARE_SERVICES:
 {
  Out_of_network:array[75]   
 },
 OTHER_SERVICES:
 {
  Durable_medical_equipment:
  {
   In_network: array[76],
   Out_of_network:array[77]   
  },
  Orthotics_and_prosthetics:
  {
   In_network: array[78],
   Out_of_network:array[79]   
  },
  Orthotics:
  {
   In_network: array[80],
   Out_of_network:array[81]   
  },
  Diabetic_equipment:
  {
   In_network: array[82],
   Out_of_network:array[83]   
  },
  Diabetic_supplies:
  {
   In_network: array[84],
   Out_of_network:array[85]   
  },
  Acupuncture_and_chiropratic_services:
  {
   In_network: array[86]
  },
  Acupuncture:
  {
   In_network: array[87],
   Out_of_network:array[88]   
  },
  Chiropractic_services:
  {
   In_network: array[89],
   Out_of_network:array[90]   
  },
  Prosthetics:
  {
   In_network: array[91],
   Out_of_network:array[92]   
  },
  Self_injectables:
  {
   In_network: array[93]   
  },
  Specialty_drugs:
  {
   In_network: array[94]   
  }
 },
 OUTPATIENT_SERVICES:
 {
  Outpatient_surgery:
  {
   In_network: array[95]   
  },
  Skilled_nursing_facility:
  {
   In_network: array[96]   
  }
 },
 PRESCRIPTION_DRUG_COVERAGE:
 {
  Brand_name_calendar_year_deductible:
  {
   In_network:
      {
       Member: array[97],
       Family: array[98] 
      }, 
      Out_of_network:
      {
       Member: array[99],
       Family: array[100]    
      }    
  },
  Calendar_year_deductible:
  {
   In_network: array[101],
   Out_of_network:array[102]   
  },
  Pediatric_dental_Diagnostic_and_preventive_services:
  {
   In_network: array[103],
   Out_of_network:array[104]    
  },
  Plans_calendar_year_deductible_applies_to_all_prescription_drug_tiers:
  {
   In_network: array[105]   
  },
  Prescription_drug_deductible:
  {
   In_network: array[106]    
  },
  Prescription_drugs:
  {
   In_network: array[107],
   Out_of_network:array[108]   
  },
  Specialty_drugs:
  {
   Out_of_network:array[109]   
  },
  deductible_applies_to_all_prescription_drug_tiers:
  {
   In_network: array[110]   
  }   
 },
 PEDIATRIC_DENTAL:
 {
  Diagnostic_and_preventive_services:
  {
   In_network: array[111]   
  }
 },
PEDIATRIC_VISION:
 {
  Eye_exam:
  {
   In_network: array[112],
   Out_of_network:array[113]   
  },
  Glasses:
  {
   In_network: array[114],
   Out_of_network:array[115]   
  },
  Routine_eye_exam:
  {
   In_network: array[116]   
  }   
 },
 Unlimited_lifetime_maximum:
 {
  In_network: array[117],
  Out_of_network:array[118]   
 }
});

 NewHealthNet.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
}); 

 };