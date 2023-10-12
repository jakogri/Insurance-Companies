var mongoose = require('mongoose');
var nconf = require('nconf');
var mongoosedelete = require('mongoose-delete');
var path = require('path');
var db = mongoose.connection;

nconf.argv()
	.env()
	.file({file: path.join(__dirname, 'config.json')});


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
     }/*,
       Lifetime_benefit_maximum:
     {
         In_network: String,
         Out_of_network: String
     }*/

   },
        PROFESSIONAL_SERVICES:
   {
     /*  Ambulance_services:
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
    },*/
       Office_visit:
    {
        In_network: String,
        Out_of_network: String
    },
    /*   Preventive_care_services_for_adults:
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
    },*/
       Specialist_visit:
    {
        In_network: String,
        Out_of_network: String
    }/*,
       Urgent_care:
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
    }*/
   },
     /*   HOSPITAL_SERVICES:
   {
       Inpatient_care:
    {
        In_network: String,
        Out_of_network: String
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
   },*/

   EMERGENCY_SERVICES:
 {
  /*   Emergency_room:
  {
      In_network: String,
      Out_of_network: String
  },*/
     Urgent_care:
  {
      In_network: String,
      Out_of_network: String
  }/*,
     Ambulance_services:
  {
      In_network: String,
      Out_of_network: String
  }*/
 },
 /* OTHER_SERVICES:
 {
     Durable_medical_equipment:
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
     Self_injectable_drugs:
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
 },*/
        PRESCRIPTION_DRUG_COVERAGE:
 {
  /*   Brand_name_calendar_year_deductible:
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
     Prescription_drug_deductible:
  {
      In_network: String
  },*/
     Prescription_drugs_1:
  {
      In_network: String,
      Out_of_network: String
  },
      Prescription_drugs_2:
  {
      In_network: String,
      Out_of_network: String
  },
      Prescription_drugs_3:
  {
      In_network: String,
      Out_of_network: String
  }/*,
     Specialty_drugs:
  {
      Out_of_network: String
  }*/
 }/*,
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
  },

     Unlimited_lifetime_maximum:
 {
     In_network: String,
     Out_of_network: String
 }
 }*/
 
});

var SchemaNormal = new Schema({
   User     : String,
   Network  : String,
   PlanName : String,
   PlanType : String,
   FilePath : String, 
   Deductible:
   {
    InNetwork:
    {
      Member: String,
      Family: String   
    },
    OutOfNetwork:
    {
      Member: String,
      Family: String   
    }   
   },
   OOPLimit:
   {
    InNetwork:
    {
      Member: String,
      Family: String   
    },
    OutOfNetwork:
    {
      Member: String,
      Family: String    
    }    
   },
   PCPVisit:
   {
    InNetwork: String,
    OutOfNetwork: String   
   },
   SpecialistVisit:
   {
    InNetwork: String,
    OutOfNetwork: String   
   },
   RxGenericTier1:
   {
    InNetwork: String,
    OutOfNetwork: String   
   },     
   RxBrandTier2:
   {
    InNetwork: String,
    OutOfNetwork: String   
   },     
   RxNonFormularyTier3:
   {
    InNetwork: String,
    OutOfNetwork: String   
   },
   UrgentCare:
   {
    InNetwork: String,
    OutOfNetwork: String   
   }               
});

function ConnectStr()
{
  var ConnectString = 'mongodb://';
    if ((nconf.get("user") != "") && (nconf.get("pass") != ""))
        ConnectString = ConnectString + nconf.get("user") + ':' + nconf.get("pass") + '@';
    ConnectString = ConnectString + nconf.get("uri");
    if (nconf.get("port") != "") ConnectString = ConnectString + ':' + nconf.get("port");
    ConnectString = ConnectString + '/' + nconf.get("database");
    return ConnectString
    
};

exports.SetHealthNetNormal = function ()
{
    var HealthNetCount = 0;
    var NewHealthNetNormal;
    var ConnectString = ConnectStr();
    var docs = [];
    var FindHealthNet = mongoose.model('HealthNet', schema);
    var HealthNetNormal = mongoose.model('HealthNetNormal', SchemaNormal);
    try 
    {
    mongoose.connect(ConnectString);
    } catch (err) {
     return (err);
    }; 
    var FindHealthNetCount = 0;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function callback()
    {
        console.log("Connected!")
    });
    try 
    {
    FindHealthNet.count({}, function (err, count)
    {
        FindHealthNetCount = count;
    });
     } catch (err) {
     return (err);
    }; 
    try 
    {
    FindHealthNet.find({}, function (err, docs)
    {

        var i = 0;
        var CurPlanType;
        while (i < FindHealthNetCount)
        {
            if (docs[i].Plan.indexOf('HMO') >= 0) CurPlanType = 'HMO';
            else CurPlanType = 'PPO';
            NewHealthNetNormal = new HealthNetNormal({
                User: docs[i].User,
                Network : 'HealthNet',
                PlanName: docs[i].Plan,
                PlanType: CurPlanType,
                FilePath: docs[i].Path,
                Deductible:
            {
                InNetwork:
             {
                 Member: docs[i].PLAN_MAXIMUMS.Calendar_year_deductible.In_network.Member,
                 Family: docs[i].PLAN_MAXIMUMS.Calendar_year_deductible.In_network.Family
             },
                OutOfNetwork:
            {
                Member: docs[i].PLAN_MAXIMUMS.Calendar_year_deductible.Out_of_network.Member,
                Family: docs[i].PLAN_MAXIMUMS.Calendar_year_deductible.Out_of_network.Family
            }
            },
                OOPLimit:
           {
               InNetwork:
           {
               Member: docs[i].PLAN_MAXIMUMS.Out_of_pocket_maximum.In_network.Member,
               Family: docs[i].PLAN_MAXIMUMS.Out_of_pocket_maximum.In_network.Family
           },
               OutOfNetwork:
           {
               Member: docs[i].PLAN_MAXIMUMS.Out_of_pocket_maximum.Out_of_network.Member,
               Family: docs[i].PLAN_MAXIMUMS.Out_of_pocket_maximum.Out_of_network.Family
           }
           },
                PCPVisit:
           {
               InNetwork: docs[i].PROFESSIONAL_SERVICES.Office_visit.In_network,
               OutOfNetwork: docs[i].PROFESSIONAL_SERVICES.Office_visit.Out_of_network
           },
                SpecialistVisit:
           {
               InNetwork: docs[i].PROFESSIONAL_SERVICES.Specialist_visit.In_network,
               OutOfNetwork: docs[i].PROFESSIONAL_SERVICES.Specialist_visit.Out_of_network
           },
                RxGenericTier1:
           {
               InNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Prescription_drugs_1.In_network,
               OutOfNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Prescription_drugs_1.Out_of_network
           },
                RxBrandTier2:
           {
               InNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Prescription_drugs_2.In_network,
               OutOfNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Prescription_drugs_2.Out_of_network
           },
                RxNonFormularyTier3:
           {
               InNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Prescription_drugs_3.In_network,
               OutOfNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Prescription_drugs_3.Out_of_network
           },
              UrgentCare:
           {
               InNetwork: docs[i].EMERGENCY_SERVICES.Urgent_care.In_network,
               OutOfNetwork: docs[i].EMERGENCY_SERVICES.Urgent_care.Out_of_network
           }
            });
            NewHealthNetNormal.save(function (err, thor)
            {
                if (err) return console.error(err);
                console.dir(thor);
            });
            i++;
        }
    });
     } catch (err) {
     return (err);
    }; 
    mongoose.disconnect();
    return('HealthNetNormal - complet.');
}; 

exports.DelHealthNet = function (array)
{
    var ConnectString = ConnectStr();
    var DelHealthNet = mongoose.model('HealthNet', schema);
    try
    {
    mongoose.connect(ConnectString);
    } catch (err)
    {
        return (err);
    };
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function callback()
    {
        console.log("Connected!") 
    }); 
    try
    {  
    DelHealthNet.findOne({ User: array[0], Path: array[1], Plan: array[2] }, function (err, doc) 
    { 
      DelHealthNet.findByIdAndRemove({'_id' : doc.id}, function (err, thor)
    {  
        if (err) return console.error(err);
        console.dir(thor);
    }) 
    });
    } catch (err)
    {
        return (err);
    };
    mongoose.disconnect();
    return ("");
};

exports.SaveHealthNet = function (array)
{
    var ConnectString = ConnectStr();
    var HealthNet = mongoose.model('HealthNet', schema);
   
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
     }/*,
       Lifetime_benefit_maximum:
     {
         In_network: array[11],
         Out_of_network: array[12]
     }*/

   },
        PROFESSIONAL_SERVICES:
   {
     /*  Ambulance_services:
    {
        In_network: array[13],
        Out_of_network: array[14]
    },
       CVS_MinuteClinic_physician_visit:
    {
        In_network: array[15]
    },
       Emergency_room_facility:
    {
        In_network: array[16]
    },*/
       Office_visit:
    {
        In_network: array[11],
        Out_of_network: array[12]
    },
     /*  Preventive_care_services_for_adults:
    {
        In_network: array[19],
        Out_of_network: array[20]
    },
       Preventive_care_services_for_children:
    {
        In_network: array[21],
        Out_of_network: array[22]
    },
       Preventive_care_services:
    {
        In_network: array[23],
        Out_of_network: array[24]
    },
       Rehabilitation_therapy:
    {
        In_network: array[25],
        Out_of_network: array[26]
    },
       Self_injectable_drugs:
    {
        In_network: array[27],
        Out_of_network: array[28]
    },*/
       Specialist_visit:
    {
        In_network: array[13],
        Out_of_network: array[14]
    }/*,
       Urgent_care:
    {
        In_network: array[31]
    },
       X_ray_and_laboratory_procedures:
    {
        In_network: array[32],
        Out_of_network: array[33]
    },
       Rehabilitation_and_habilitation_therapy:
    {
        In_network: array[34],
        Out_of_network: array[35]
    }*/
   },
    /*    HOSPITAL_SERVICES:
   {
       Inpatient_care:
    {
        In_network: array[36],
        Out_of_network: array[37]
    },
       Outpatient_facility_services:
    {
        In_network: array[38],
        Out_of_network: array[39]
    },
       Outpatient_surgery:
    {
        In_network: array[40],
        Out_of_network: array[41]
    },
       Skilled_nursing_facility:
    {
        In_network: array[42],
        Out_of_network: array[43]
    }
   },*/

        EMERGENCY_SERVICES:
 {
  /*   Emergency_room:
  {
      In_network: array[44],
      Out_of_network: array[45]
  },*/
     Urgent_care:
  {
      In_network: array[15],
      Out_of_network: array[16]
  }/*,
     Ambulance_services:
  {
      In_network: array[48],
      Out_of_network: array[49]
  }*/
 },
  /*      OTHER_SERVICES:
 {
     Durable_medical_equipment:
  {
      In_network: array[50],
      Out_of_network: array[51]
  },
     Orthotics:
  {
      In_network: array[52],
      Out_of_network: array[53]
  },
     Diabetic_equipment:
  {
      In_network: array[54],
      Out_of_network: array[55]
  },
     Diabetic_supplies:
  {
      In_network: array[56],
      Out_of_network: array[57]
  },
     Acupuncture_and_chiropratic_services:
  {
      In_network: array[58]
  },
     Acupuncture:
  {
      In_network: array[59],
      Out_of_network: array[60]
  },
     Chiropractic_services:
  {
      In_network: array[61],
      Out_of_network: array[62]
  },
     Prosthetics:
  {
      In_network: array[63],
      Out_of_network: array[64]
  },
     Self_injectable_drugs:
  {
      In_network: array[65]
  },
     Specialty_drugs:
  {
      In_network: array[66]
  }
 },
        OUTPATIENT_SERVICES:
 {
     Outpatient_surgery:
  {
      In_network: array[67]
  },
     Skilled_nursing_facility:
  {
      In_network: array[68]
  }
 },*/
        PRESCRIPTION_DRUG_COVERAGE:
 {
   /*  Brand_name_calendar_year_deductible:
  {
      In_network:
      {
          Member: array[69],
          Family: array[70]
      },
      Out_of_network:
      {
          Member: array[71],
          Family: array[72]
      }
  },
     Calendar_year_deductible:
  {
      In_network: array[73],
      Out_of_network: array[74]
  },
     Pediatric_dental_Diagnostic_and_preventive_services:
  {
      In_network: array[75],
      Out_of_network: array[76]
  },
     Prescription_drug_deductible:
  {
      In_network: array[77]
  },*/
     Prescription_drugs_1:
  {
      In_network: array[17],
      Out_of_network: array[18]
  },
     Prescription_drugs_2:
  {
      In_network: array[19],
      Out_of_network: array[20]
  },
     Prescription_drugs_3:
  {
      In_network: array[21],
      Out_of_network: array[22]
  }/*,
     Specialty_drugs:
  {
      Out_of_network: array[84]
  }*/
 }/*,
        PEDIATRIC_DENTAL:
 {
     Diagnostic_and_preventive_services:
  {
      In_network: array[85]
  }
 },
        PEDIATRIC_VISION:
 {
     Eye_exam:
  {
      In_network: array[86],
      Out_of_network: array[87]
  },
     Glasses:
  {
      In_network: array[88],
      Out_of_network: array[89]
  },
     Routine_eye_exam:
  {
      In_network: array[90]
  },

     Unlimited_lifetime_maximum:
 {
     In_network: array[91],
     Out_of_network: array[92]
 }
 }*/
    });
    try 
    {
    mongoose.connect(ConnectString);
    } catch (err) {
     return (err);
    };
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function callback()
    {
        console.log("Connected!")
    });   
    try 
    {
    NewHealthNet.save(function (err, thor)
    {
        if (err) return console.error(err);
        console.dir(thor);
    });
    } catch (err) {
     return (err);
    };
    mongoose.disconnect();
    return ('HealthNet - complet. User - ' + array[0] + '; Path -' + array[1] + '; Plan - ' + array[2]);
};

