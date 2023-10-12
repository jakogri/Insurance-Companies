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
        ANNUAL_PLAN_DEDUCTIBLE:
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
        ANNUAL_OUT_OF_POCKET_MAXIMUM:
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
    /* MAXIMUM_BENEFIT_WHILE_INSURED:
     {
         In_network: String,
         Out_of_network: String
     },
     PHARMACY_ANNUAL_DEDUCTIBLE:
     {
      Brand_name_drugs:
      {
       In_network: String,
       Out_of_network: String   
      }      
     },*/
     IN_THE_MEDICAL_OFFICE:
     {
      Primary_care_visits:
      {
       In_network: String,
       Out_of_network: String   
      },
      Urgent_care_visits:
      {
       In_network: String,
       Out_of_network: String  
      },
      Specialt_office_visits:
      {
       In_network: String,
       Out_of_network: String    
      }/*,
      Preventive_exams:
      {
       In_network: String,
       Out_of_network: String   
      },
      Prenatal_care:
      {
       In_network: String,
       Out_of_network: String  
      },
      Postpartum_care:
      {
       In_network: String,
       Out_of_network: String   
      },
      Well_child_preventive_care_visits:
      {
       In_network: String,
       Out_of_network: String  
      },
      Vaccines:
      {
       In_network: String,
       Out_of_network: String   
      },
      Allergy_injections:
      {
       In_network: String,
       Out_of_network: String   
      },
      Infertility_services:
      {
       In_network: String,
       Out_of_network: String    
      },
      Occupational_physical_and_speech_therapy:
      {
       In_network: String,
       Out_of_network: String
      },
      Most_laboratory_tests:
      {
       In_network: String,
       Out_of_network: String  
      },
      Most_X_rays_and_diagnostic:
      {
       In_network: String,
       Out_of_network: String    
      },
      Most_MRI_CT_PET_scans:
      {
       In_network: String,
       Out_of_network: String    
      },
      Outpatient_surgery:
      {
       In_network: String,
       Out_of_network: String    
      } */ 
     },
    /* EMERGENCY_SERVICES:
     {
      Emergency_Department_visits:
      {
       In_network: String,
       Out_of_network: String    
      },
      Ambulance:
      {
       In_network: String,
       Out_of_network: String   
      }   
     },*/
     PRESCRIPTIONS:
     {
      Generic_drugs:
      {
       In_network: String,
       Out_of_network: String  
      },
      Brand_name_drugs:
      {
       In_network: String,
       Out_of_network: String   
      }   
     }/*,
     HOSPITAL_CARE:
     {
      Physicians_services_room_and_board_tests_medications_supplies_therapies_birth_services:
      {
       In_network: String,
       Out_of_network: String    
      },
      Skilled_nursing_facility_care:
      {
       In_network: String,
       Out_of_network: String  
      }   
     },
     MENTAL_HEALTH_SERVICES:
     {
      In_the_medical_office:
      {
       In_network: String,
       Out_of_network: String   
      },
      In_the_hospital:
      {
       In_network: String,
       Out_of_network: String  
      }   
     },
     CHEMICAL_DEPENDENCY_SERVICES:
     {
      In_the_medical_office:
      {
       In_network: String,
       Out_of_network: String    
      },
      In_the_hospital:
      {
       In_network: String,
       Out_of_network: String     
      }   
     },
     OTHER:
     {
      Certain_durable_medical_equipment:
      {
       In_network: String,
       Out_of_network: String    
      },
      Certain_prosthetic_and_orthotic_devices:
      {
       In_network: String,
       Out_of_network: String   
      },
      Pediatric_optical:
      {
       In_network: String,
       Out_of_network: String   
      },
      Pediatric_vision_exam:
      {
       In_network: String,
       Out_of_network: String   
      },
      Adult_optical:
      {
       In_network: String,
       Out_of_network: String   
      },
      Adult_vision_exam:
      {
       In_network: String,
       Out_of_network: String  
      },
      Home_health_care:
      {
       In_network: String,
       Out_of_network: String  
      },
      Hospice_care:
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
   RxNonPreferredTier4:
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

exports.SetKaiserNormal = function ()
{
    var KaiserCount = 0;
    var NewKaiserNormal;
    var ConnectString = ConnectStr();
    var docs = [];
    var FindKaiser = mongoose.model('Kaiser', schema);
    var KaiserNormal = mongoose.model('KaiserNormal', SchemaNormal);
    try 
    {
    mongoose.connect(ConnectString);
     } catch (err) {
     return (err);
    }; 
    var FindKaiserCount = 0;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function callback()
    {
        console.log("Connected!")
    });
    try 
    {
    FindKaiser.count({}, function (err, count)
    {
        FindKaiserCount = count;
    });
     } catch (err) {
     return (err);
    }; 
    try 
    {
    FindKaiser.find({}, function (err, docs)
    {

        var i = 0;
        var CurPlanType;
        while (i < FindKaiserCount)
        {
            if (docs[i].Plan.indexOf('HMO') >= 0) CurPlanType = 'HMO';
            else CurPlanType = 'PPO';
            NewKaiserNormal = new KaiserNormal({
                User: docs[i].User,
                Network : 'Kaiser',
                PlanName: docs[i].Plan,
                PlanType: CurPlanType,
                FilePath: docs[i].Path,
                Deductible:
            {
                InNetwork:
             {
                 Member: docs[i].ANNUAL_PLAN_DEDUCTIBLE.In_network.Member,
                 Family: docs[i].ANNUAL_PLAN_DEDUCTIBLE.In_network.Family
             },
                OutOfNetwork:
            {
                Member: docs[i].ANNUAL_PLAN_DEDUCTIBLE.Out_of_network.Member,               
                Family: docs[i].ANNUAL_PLAN_DEDUCTIBLE.Out_of_network.Family
            }
            },
                OOPLimit:
           {
               InNetwork:
           {
               Member: docs[i].ANNUAL_OUT_OF_POCKET_MAXIMUM.In_network.Member,
               Family: docs[i].ANNUAL_OUT_OF_POCKET_MAXIMUM.In_network.Family
           },
               OutOfNetwork:
           {
               Member: docs[i].ANNUAL_OUT_OF_POCKET_MAXIMUM.Out_of_network.Member,
               Family: docs[i].ANNUAL_OUT_OF_POCKET_MAXIMUM.Out_of_network.Family
           }
           },
                PCPVisit:
           {
               InNetwork: docs[i].IN_THE_MEDICAL_OFFICE.Primary_care_visits.In_network,
               OutOfNetwork: docs[i].IN_THE_MEDICAL_OFFICE.Primary_care_visits.Out_of_network
           },
                SpecialistVisit:
           {
               InNetwork: docs[i].IN_THE_MEDICAL_OFFICE.Specialt_office_visits.In_network,
               OutOfNetwork: docs[i].IN_THE_MEDICAL_OFFICE.Specialt_office_visits.Out_of_network
           },
                RxGenericTier1:
           {
               InNetwork: docs[i].PRESCRIPTIONS.Generic_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTIONS.Generic_drugs.Out_of_network
           },
                RxBrandTier2:
           {
               InNetwork: docs[i].PRESCRIPTIONS.Brand_name_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTIONS.Brand_name_drugs.Out_of_network
           },
                RxNonFormularyTier3:
           {
               InNetwork: docs[i].PRESCRIPTIONS.Brand_name_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTIONS.Brand_name_drugs.Out_of_network
           },
                RxNonPreferredTier4:
           {
               InNetwork: docs[i].PRESCRIPTIONS.Brand_name_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTIONS.Brand_name_drugs.Out_of_network
           }, 
              UrgentCare:
           {
               InNetwork: docs[i].IN_THE_MEDICAL_OFFICE.Urgent_care_visits.In_network,
               OutOfNetwork: docs[i].IN_THE_MEDICAL_OFFICE.Urgent_care_visits.Out_of_network
           }
            });
            NewKaiserNormal.save(function (err, thor)
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
    return('KaiserNormal - complet.');
}; 

exports.DelKaiser = function (array)
{
    var ConnectString = ConnectStr();
    var DelKaiser = mongoose.model('Kaiser', schema);
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
    DelKaiser.findOne({ User: array[0], Path: array[1], Plan: array[2] }, function (err, doc) 
    { 
      DelKaiser.findByIdAndRemove({'_id' : doc.id}, function (err, thor)
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

exports.SaveKaiser = function (array)
{
    var ConnectString = ConnectStr();
    var Kaiser = mongoose.model('Kaiser', schema);

    var NewKaiser = new Kaiser({
        User: array[0],
        Path: array[1],
        Plan: array[2],
        ANNUAL_PLAN_DEDUCTIBLE:
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
        ANNUAL_OUT_OF_POCKET_MAXIMUM:
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
    /* MAXIMUM_BENEFIT_WHILE_INSURED:
     {
         In_network: array[11],
         Out_of_network: array[12]
     },
     PHARMACY_ANNUAL_DEDUCTIBLE:
     {
      Brand_name_drugs:
      {
       In_network: array[13],
       Out_of_network: array[14]   
      }      
     },*/
     IN_THE_MEDICAL_OFFICE:
     {
      Primary_care_visits:
      {
       In_network: array[11],
       Out_of_network: array[12]    
      },
      Urgent_care_visits:
      {
       In_network: array[13],
       Out_of_network: array[14]   
      },
      Specialt_office_visits:
      {
       In_network: array[15],
       Out_of_network: array[16]    
      }/*,
      Preventive_exams:
      {
       In_network: array[21],
       Out_of_network: array[22]   
      },
      Prenatal_care:
      {
       In_network: array[23],
       Out_of_network: array[24]   
      },
      Postpartum_care:
      {
       In_network: array[25],
       Out_of_network: array[26]   
      },
      Well_child_preventive_care_visits:
      {
       In_network: array[27],
       Out_of_network: array[28]   
      },
      Vaccines:
      {
       In_network: array[29],
       Out_of_network: array[30]   
      },
      Allergy_injections:
      {
       In_network: array[31],
       Out_of_network: array[32]   
      },
      Infertility_services:
      {
       In_network: array[33],
       Out_of_network: array[34]     
      },
      Occupational_physical_and_speech_therapy:
      {
       In_network: array[35],
       Out_of_network: array[36]   
      },
      Most_laboratory_tests:
      {
       In_network: array[37],
       Out_of_network: array[38]    
      },
      Most_X_rays_and_diagnostic:
      {
       In_network: array[39],
       Out_of_network: array[40]    
      },
      Most_MRI_CT_PET_scans:
      {
       In_network: array[41],
       Out_of_network: array[42]    
      },
      Outpatient_surgery:
      {
       In_network: array[43],
       Out_of_network: array[44]    
      } */ 
     },
     /*EMERGENCY_SERVICES:
     {
      Emergency_Department_visits:
      {
       In_network: array[45],
       Out_of_network: array[46]    
      },
      Ambulance:
      {
       In_network: array[47],
       Out_of_network: array[48]   
      }   
     },*/
     PRESCRIPTIONS:
     {
      Generic_drugs:
      {
       In_network: array[17],
       Out_of_network: array[18]   
      },
      Brand_name_drugs:
      {
       In_network: array[19],
       Out_of_network: array[20]   
      }   
     }/*,
     HOSPITAL_CARE:
     {
      Physicians_services_room_and_board_tests_medications_supplies_therapies_birth_services:
      {
       In_network: array[53],
       Out_of_network: array[54]    
      },
      Skilled_nursing_facility_care:
      {
       In_network: array[55],
       Out_of_network: array[56]   
      }   
     },
     MENTAL_HEALTH_SERVICES:
     {
      In_the_medical_office:
      {
       In_network: array[57],
       Out_of_network: array[58]   
      },
      In_the_hospital:
      {
       In_network: array[59],
       Out_of_network: array[60]   
      }   
     },
     CHEMICAL_DEPENDENCY_SERVICES:
     {
      In_the_medical_office:
      {
       In_network: array[61],
       Out_of_network: array[62]    
      },
      In_the_hospital:
      {
       In_network: array[63],
       Out_of_network: array[64]     
      }   
     },
     OTHER:
     {
      Certain_durable_medical_equipment:
      {
       In_network: array[65],
       Out_of_network: array[66]    
      },
      Certain_prosthetic_and_orthotic_devices:
      {
       In_network: array[67],
       Out_of_network: array[68]   
      },
      Pediatric_optical:
      {
       In_network: array[69],
       Out_of_network: array[70]   
      },
      Pediatric_vision_exam:
      {
       In_network: array[71],
       Out_of_network: array[72]   
      },
      Adult_optical:
      {
       In_network: array[73],
       Out_of_network: array[74]   
      },
      Adult_vision_exam:
      {
       In_network: array[75],
       Out_of_network: array[76]   
      },
      Home_health_care:
      {
       In_network: array[77],
       Out_of_network: array[78]   
      },
      Hospice_care:
      {
       In_network: array[79],
       Out_of_network: array[80]   
      }   
     }*/
    });
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
    NewKaiser.save(function (err, thor)
    {
        if (err) return console.error(err);
        console.dir(thor);
    });
     } catch (err)
    {
        return (err);
    };
 mongoose.disconnect();
 return ('Kaiser - complet. User - ' + array[0] + '; Path -' + array[1] + '; Plan - ' + array[2]);
};