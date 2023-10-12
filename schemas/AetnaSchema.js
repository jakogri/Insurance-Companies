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
      /* PCP_Referrals_required:
       {
        In_network: String,
        Out_of_network: String   
       },*/
       Member_Benefits:
       {
             
       Calendar_year_plan_deductible:
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
       Out_of_pocket_limit:
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
      /* Deductible_ansd_out_of_pocket_limit_accumulation:
       {
        In_network: String,
        Out_of_network: String   
       },
       Not_included_in_out_of_pocket_limit:
       {
        In_network: String,
        Out_of_network: String    
       },*/
       Primary_care_physician_office_visit:
       {
        In_network: String,
        Out_of_network: String   
       },
       Specialist_office_visit:
       {
        In_network: String,
        Out_of_network: String     
       },
      /* Preventive_care_Screenings_Immunizations:
       {
        In_network: String,
        Out_of_network: String    
       },
       Imaging:
       {
        In_network: String,
        Out_of_network: String   
       },
       Pharmacy_plan_type:
       {
        In_network: String,
        Out_of_network: String  
       },
       Prescription_drug_deductible:
       {
        In_network: String,
        Out_of_network: String  
       },
       Outpatient_surgery_OP_hospital_department:
       {
        In_network: String],
        Out_of_network: String    
       },
       Outpatient_surgery_freestanding_facility:
       {
        In_network: String,
        Out_of_network: String    
       },
       Inpatient_hospital_facility:
       {
        In_network: String,
        Out_of_network: String    
       },
       Rehabilitation_services:
       {
        In_network: String,
        Out_of_network: String   
       },
       Emergency_room:
       {
        In_network: String,
        Out_of_network: String    
       },
       Emergency_medical_transport:
       {
        In_network: String,
        Out_of_network: String    
       },*/
       Urgent_care:
       {
        In_network: String,
        Out_of_network: String  
       },
      /* Walk_in_clinics:
       {
        In_network: String,
        Out_of_network: String   
       },
       Chiropractic:
       {
        In_network: String,
        Out_of_network: String   
       },
       Adult_routine_vision:
       {
        In_network: String,
        Out_of_network: String     
       },
       Diagnostic_testing:
       {
        Lab:
        {
         In_network: String,
         Out_of_network: String   
        },
        X_ray:
        {
         In_network: String,
         Out_of_network: String    
        }   
       },*/
       Prescription_drugs:
       {
        Tier_1_preferred_generic:
        {
         In_network: String,
         Out_of_network: String    
        },
        Tier_2_preferred_brand:
        {
         In_network: String,
         Out_of_network: String  
        },
        Tier_3_nonpreferred_generic_and_brand:
        {
         In_network: String,
         Out_of_network: String    
        },
        Tier_4_Aetna_Specialty_CareRx:
        {
         In_network: String,
         Out_of_network: String    
        }
       }
       }
 
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
 function SetReturnString(InStr)
{
  ReturnString = InStr;  
};

exports.SetAetnaNormal = function ()
{
    var AetnaCount = 0;
    var NewAetnaNormal;
    var ConnectString = ConnectStr();
    var docs = [];
    var FindAetna = mongoose.model('Aetna', schema);
    var AetnaNormal = mongoose.model('AetnaNormal', SchemaNormal);
    var FindAetnaCount = 0;
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
    FindAetna.count({}, function (err, count)
    {
        FindAetnaCount = count;
    });
    } catch (err) {
     return (err);
    }; 
    try
    {
    FindAetna.find({}, function (err, docs)
    {

    var i = 0;
    var CurPlanType;
    while (i < FindAetnaCount)
    {
    if (docs[i].Plan.indexOf('HMO') >= 0) CurPlanType = 'HMO';
    else CurPlanType = 'PPO';
    NewAetnaNormal = new AetnaNormal({
    User: docs[i].User,
    Network : 'Aetna',
    PlanName: docs[i].Plan,
    PlanType: CurPlanType,
    FilePath: docs[i].Path,
    Deductible:
    {
    InNetwork:
    {
    Member: docs[i].Member_Benefits.Calendar_year_plan_deductible.In_network.Member,
    Family: docs[i].Member_Benefits.Calendar_year_plan_deductible.In_network.Family
    },
    OutOfNetwork:
    {
    Member: docs[i].Member_Benefits.Calendar_year_plan_deductible.Out_of_network.Member,
    Family: docs[i].Member_Benefits.Calendar_year_plan_deductible.Out_of_network.Family
    }
    },
    OOPLimit:
    {
    InNetwork:
    {
    Member: docs[i].Member_Benefits.Out_of_pocket_limit.In_network.Member,
    Family: docs[i].Member_Benefits.Out_of_pocket_limit.In_network.Family
    },
    OutOfNetwork:
    {
    Member: docs[i].Member_Benefits.Out_of_pocket_limit.Out_of_network.Member,
    Family: docs[i].Member_Benefits.Out_of_pocket_limit.Out_of_network.Family
    }
    },
    PCPVisit:
    {
    InNetwork: docs[i].Member_Benefits.Primary_care_physician_office_visit.In_network,
    OutOfNetwork: docs[i].Member_Benefits.Primary_care_physician_office_visit.Out_of_network
    },
    SpecialistVisit:
    {
    InNetwork: docs[i].Member_Benefits.Specialist_office_visit.In_network,
    OutOfNetwork: docs[i].Member_Benefits.Specialist_office_visit.Out_of_network
    },
    RxGenericTier1:
    {
    InNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_1_preferred_generic.In_network,
    OutOfNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_1_preferred_generic.Out_of_network
    },
    RxBrandTier2:
    {
    InNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_2_preferred_brand.In_network,
    OutOfNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_2_preferred_brand.Out_of_network
    },
    RxNonFormularyTier3:
    {
    InNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_3_nonpreferred_generic_and_brand.In_network,
    OutOfNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_3_nonpreferred_generic_and_brand.Out_of_network
    },
    RxNonPreferredTier4:
    {
    InNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_4_Aetna_Specialty_CareRx.In_network,
    OutOfNetwork: docs[i].Member_Benefits.Prescription_drugs.Tier_4_Aetna_Specialty_CareRx.Out_of_network
    },
    UrgentCare:
    {
    InNetwork: docs[i].Member_Benefits.Urgent_care.In_network,
    OutOfNetwork: docs[i].Member_Benefits.Urgent_care.Out_of_network
    }
    });
    NewAetnaNormal.save(function (err, thor)
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
    return('AetnaNormal - complet.');
};

exports.DelAetna = function (array)
{
    var ConnectString = ConnectStr();
    var DelAetna = mongoose.model('Aetna', schema);
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
        DelAetna.findOne({ User: array[0], Path: array[1], Plan: array[2], Network: array[25] }, function (err, doc)
        {
            DelAetna.findByIdAndRemove({ '_id': doc.id }, function (err, thor)
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

exports.SaveAetna = function (array)
{
    var ConnectString = ConnectStr();
    var Aetna = mongoose.model('Aetna', schema);

    var NewAetna = new Aetna({
        User: array[0],
        Path: array[1],
        Plan: array[2],
        Network: array[25],
        /* PCP_Referrals_required:
        {
        In_network: array[3],
        Out_of_network: array[4]   
        },*/
        Member_Benefits:
       {

           Calendar_year_plan_deductible:
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
           Out_of_pocket_limit:
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
           /*  Deductible_ansd_out_of_pocket_limit_accumulation:
           {
           In_network: array[13],
           Out_of_network: array[14]   
           },
           Not_included_in_out_of_pocket_limit:
           {
           In_network: array[15],
           Out_of_network: array[16]    
           },*/
           Primary_care_physician_office_visit:
       {
           In_network: array[11],
           Out_of_network: array[12]
       },
           Specialist_office_visit:
       {
           In_network: array[13],
           Out_of_network: array[14]
       },
           /* Preventive_care_Screenings_Immunizations:
           {
           In_network: array[21],
           Out_of_network: array[22]    
           },
           Imaging:
           {
           In_network: array[23],
           Out_of_network: array[24]    
           },
           Pharmacy_plan_type:
           {
           In_network: array[25],
           Out_of_network: array[26]   
           },
           Prescription_drug_deductible:
           {
           In_network: array[27],
           Out_of_network: array[28]    
           },
           Outpatient_surgery_OP_hospital_department:
           {
           In_network: array[29],
           Out_of_network: array[30]    
           },
           Outpatient_surgery_freestanding_facility:
           {
           In_network: array[31],
           Out_of_network: array[32]    
           },
           Inpatient_hospital_facility:
           {
           In_network: array[33],
           Out_of_network: array[34]    
           },
           Rehabilitation_services:
           {
           In_network: array[35],
           Out_of_network: array[36]    
           },
           Emergency_room:
           {
           In_network: array[37],
           Out_of_network: array[38]    
           },
           Emergency_medical_transport:
           {
           In_network: array[39],
           Out_of_network: array[40]    
           },*/
           Urgent_care:
       {
           In_network: array[15],
           Out_of_network: array[16]
       },
           /* Walk_in_clinics:
           {
           In_network: array[43],
           Out_of_network: array[44]   
           },
           Chiropractic:
           {
           In_network: array[45],
           Out_of_network: array[46]   
           },
           Adult_routine_vision:
           {
           In_network: array[47],
           Out_of_network: array[48]     
           },
           Diagnostic_testing:
           {
           Lab:
           {
           In_network: array[49],
           Out_of_network: array[50]    
           },
           X_ray:
           {
           In_network: array[51],
           Out_of_network: array[52]    
           }   
           },*/
           Prescription_drugs:
       {
           Tier_1_preferred_generic:
        {
            In_network: array[17],
            Out_of_network: array[18]
        },
           Tier_2_preferred_brand:
        {
            In_network: array[19],
            Out_of_network: array[20]
        },
           Tier_3_nonpreferred_generic_and_brand:
        {
            In_network: array[21],
            Out_of_network: array[22]
        },
           Tier_4_Aetna_Specialty_CareRx:
        {
            In_network: array[23],
            Out_of_network: array[24]
        }
       }
       }
    });

    try 
    {
      mongoose.connect(ConnectString);
    } catch (err) {
     return (err);
    }; 
   try 
    {
    NewAetna.save(function (err, thor)
    {
      if (err)
      return console.error(err);
       return console.dir(thor);
    });
     } catch (err) {
     return (err);
    }; 
        
    mongoose.disconnect();
    return ('Aetna - complet. User - ' + array[0] + '; Path -' + array[1] + '; Plan - ' + array[2] + '; Network - ' + array[25]);
};