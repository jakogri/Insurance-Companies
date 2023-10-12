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
        Network: String,
        DEDUCTIBLE:
   {
       Calendar_Year_Medical_Deductible:
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
       Calendar_Year_Out_of_Pocket_Maximum:
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
     }
     },
     /*  LIFETIME_BENEFIT_MAXIMUM:
      {
          Covered_Services:
       {
           In_network: String,
           Out_of_network: String
       }
      },*/
       PROFESSIONAL_SERVICES:
     {
         Professional_Benefits:
      {
          Physician_office_visits:
       {
           In_network: String,
           Out_of_network: String
       },
          Specialist_office_visits:
       {
           In_network: String,
           Out_of_network: String
       }/*,
          CT_scans_MRIs_MRAs_PET_scans_and_cardiac_diagnostic_procedures_utilizing_nuclear_medicine:
       {
           In_network: String,
           Out_of_network: String
       },
          Outpatient_diagnostic_laboratory_and_pathology:
       {
           In_network: String,
           Out_of_network: String  
       }*/
      }/*,
         Allergy_Testing_and_Treatment_Benefits:
      {
          Office_visits:
       {
           In_network: String,
           Out_of_network: String
       }
      },
         Preventive_Health_Benefits:
      {
          Preventive_health_services:
       {
           In_network: String,
           Out_of_network: String
       }
      }*/
     },
     /*  OUTPATIENT_SERVICES:
    {
        Hospital_Benefits:
     {
         Outpatient_surgery_performed_at_an_ambulatory_surgery_center:
      {
          In_network: String,
          Out_of_network: String
      },
         Outpatient_surgery_in_a_hospital:
      {
          In_network: String,
          Out_of_network: String
      },
         Outpatient_services_for_treatment_of_illness_or_injury_and_necessary_supplies:
      {
          In_network: String,
          Out_of_network: String
      },
         CT_scans_MRIs_MRAs_PET_scans_and_cardiac_diagnostic_procedures_utilizing_nuclear_medicine_performed_in_a_hospital:
      {
          In_network: String,
          Out_of_network: String
      },
         Outpatient_diagnostic_X_ray_and_imaging_performed_in_a_hospital:
      {
          In_network: String,
          Out_of_network: String
      },
         Outpatient_diagnostic_laboratory_and_pathology_performed_in_a_hospital:
      {
          In_network: String,
          Out_of_network: String
      },
         Bariatric_surgery:
      {
          In_network: String,
          Out_of_network: String
      }
     }
    },
       HOSPITALIZATION_SERVICES:
    {
        Hospital_Benefits:
     {
       Inpatient_physician_services:
      {
          In_network: String,
          Out_of_network: String
      },
         Inpatient_non_emergency_facility_services:
      {
          In_network: String,
          Out_of_network: String
      },
         Bariatric_surgery:
      {
          In_network: String,
          Out_of_network: String
      }
     },
        Skilled_Nursing_Facility_Benefits:
     {
         Services_from_a_free_standing_skilled_nursing_facility:
      {
          In_network: String,
          Out_of_network: String
      },
         Skilled_nursing_unit_of_a_hospital:
      {
          In_network: String,
          Out_of_network: String
      }
     }
    },*/
       EMERGENCY_HEALTH_COVERAGE:
    {
      /*  Emergency_room_services_not_resulting_in_admission:
     {
         In_network: String,
         Out_of_network: String
     },
     Emergency_room_services_resulting_in_admission:
     {
       
         In_network: String,
         Out_of_network: String  
     },
     Emergency_room_physician_services:
     {
        In_network: String,
        Out_of_network: String  
     },*/
     Urgent_care:
     {
        In_network: String,
        Out_of_network: String   
     }
    },/*
    AMBULANCE_SERVICES:
    {
     Emergency_or_authorized_transport:
     {
        In_network: String,
        Out_of_network: String   
     }   
    },*/
     PRESCRIPTION_DRUG_COVERAGE:
     {
       Retail_Prescriptions:
       {
       /* Contraceptive_drugs_and_devices:
        {
         In_network: String,
         Out_of_network: String  
        },*/
        Generic_drugs:
        {
         In_network: String,
         Out_of_network: String
        },
        Preferred_brand_drugs:
        {
         In_network: String,
         Out_of_network: String  
        },
        Non_preferred_brand_drugs:
        {
         In_network: String,
         Out_of_network: String     
        }   
       }/*,
       Mail_Service_Prescriptions:
       {
        Contraceptive_drugs_and_devices:
        {
         In_network: String,
         Out_of_network: String   
        },
        Generic_drugs:
        {
         In_network: String,
         Out_of_network: String    
        },
        Preferred_brand_drugs:
        {
         In_network: String,
         Out_of_network: String  
        },
        Non_preferred_brand_drugs:
        {
         In_network: String,
         Out_of_network: String  
        }   
       },
       Specialty_Pharmacies:
       {
        Specialty_drugs:
        {
         In_network: String,
         Out_of_network: String   
        }   
       }*/  
     }/*,
     PROSTHETICS_ORTHOTICS:
     {
      Prosthetic_equipment_and_devices:
      {
       In_network: String,
       Out_of_network: String    
      },
      Orthotic_equipment_and_devices:
      {
       In_network: String,
       Out_of_network: String    
      }   
     },
     DURABLE_MEDICAL_EQUIPMENT:
     {
      Breast_pump:
      {
       In_network: String,
       Out_of_network: String   
      },
      Other_durable_medical_equipment:
      {
       In_network: String,
       Out_of_network: String     
      }   
     },
     MENTAL_HEALTH_SERVICES:
     {
      Inpatient_hospital_services:
      {
       In_network: String,
       Out_of_network: String   
      },
      Outpatient_mental_healt_services:
      {
       In_network: String,
       Out_of_network: String    
      }   
     },
     CHEMICAL_DEPENDENCY_SERVICES:
     {
      Inpatient_hospital_services_for_medical_acute_detoxification:
      {
       In_network: String,
       Out_of_network: String   
      },
      Outpatient_substance_abuse_services:
      {
       In_network: String,
       Out_of_network: String    
      }   
     },
     HOME_HEALTH_SERVICES:
     {
      Home_health_care_agency_services:
      {
       In_network: String,
       Out_of_network: String  
      },
      Home_infusion_home_intravenous_injectable_therapy_and_infusion_nursing_visits_provided_by_a_home_infusion_agency:
      {
       In_network: String,
       Out_of_network: String  
      }   
     },
     OTHER:
     {
      Hospice_Program_Benefits:
      {
       Routine_home_care:
       {
        In_network: String,
        Out_of_network: String   
       },
       Inpatient_respite_care:
       {
        In_network: String,
        Out_of_network: String    
       },   
       hour_24_continuous_home_care:
       {
        In_network: String,
        Out_of_network: String   
       },
       Shor_term_inpatient_care_for_pain_and_symptom_management:
       {
        In_network: String,
        Out_of_network: String
       }
      },
      Chiropractic_Benefits:
      {
       Chiropractic_services:
       {
        In_network: String,
        Out_of_network: String   
       }   
      },
      Acupuncture_Benefits:
      {
       Acupuncture_by_a_licensed_acupuncturist:
       {
        In_network: String,
        Out_of_network: String   
       },
       Acupuncture_by_doctors_of_medicine:
       {
        In_network: String,
        Out_of_network: String  
       }   
      },
      Rehabilitation_Benefits:
      {
       Office_location:
       {
        In_network: String,
        Out_of_network: String  
       }   
      },
      Pregnancy_and_Maternity_Care_Benefits:
      {
       Prenatal_and_preconception_physician_office_visit_initial_visit:
       {
        In_network: String,
        Out_of_network: String   
       },
       Prenatal_and_preconception_physician_office_visit_subsequent_visits:
       {
        In_network: String,
        Out_of_network: String 
       },
       Postnatal_physician_office_visits:
       {
        In_network: String,
        Out_of_network: String   
       }   
      },
      Family_Planning_Benefits:
      {
       Counseling_and_consulting:
       {
        In_network: String,
        Out_of_network: String  
       },
       Elective_abortion:
       {
        In_network: String,
        Out_of_network: String 
       },
       Tubal_ligation:
       {
        In_network: String,
        Out_of_network: String   
       },
       Vasectomy:
       {
        In_network: String,
        Out_of_network: String
       }   
      },
      Diabetes_Care_Benefits:
      {
       Devices_equipment_and_non_testing_supplies:
       {
        In_network: String,
        Out_of_network: String   
       },
       Diabetes_self_management_training:
       {
        In_network: String,
        Out_of_network: String   
       }   
      },
      Care_Outside_of_Plan_Service_Area:
      {
       Within_US_BlueCard_Program:
       {
        In_network: String,
        Out_of_network: String   
       },
       Outside_of_US_BlueCard_Worldwide:
       {
        In_network: String,
        Out_of_network: String     
       }   
      }   
     },
     Pediatric_Vision_Benefits:
     {
      Comprehensive_Eye_Exam:
      {
       Ophthalmologic:
       {
        Routine_ophthalmologic_exam_with_refraction_new_patient:
        {
         In_network: String,
         Out_of_network: String  
        },
        Routine_ophthalmologic_exam_with__refraction_established_patient:
        {
         In_network: String,
         Out_of_network: String    
        }   
       },
       Optometric:
       {
        New_patient_exams:
        {
         In_network: String,
         Out_of_network: String   
        },
        Established_patient_exams:
        {
         In_network: String,
         Out_of_network: String  
        }   
       }   
      },
      Eyeglasses:
      {
       Lenses_one_pair_per_calendar_year:
       {
        Single_vision:
        {
         In_network: String,
         Out_of_network: String
  
        },
        Conventional_bifocal:
        {
         In_network: String,
         Out_of_network: String   
        },
        Conventional_trifocal:
        {
         In_network: String,
         Out_of_network: String    
        },
        Lenticular:
        {
         In_network: String,
         Out_of_network: String
        },
        Lenses_include_choice_of_glass_plastic_or_polycarbonate_lenses_all_lens_powers:
        {
         In_network: String,
         Out_of_network: String  
        }   
       },
       Optional_Lenses_and_Treatments:
       {
        UV_coating:
        {
         In_network: String,
         Out_of_network: String  
        },
        Anti_reflective_coating:
        {
         In_network: String,
         Out_of_network: String    
        },
        High_index_lenses:
        {
         In_network: String,
         Out_of_network: String    
        },
        Photochromic_lenses_plastic:
        {
         In_network: String,
         Out_of_network: String   
        },
        Photochromic_lenses_glass:
        {
         In_network: String,
         Out_of_network: String   
        },
        Polarized_enses:
        {
         In_network: String,
         Out_of_network: String
        },
        Standard_progressives:
        {
         In_network: String,
         Out_of_network: String    
        },
        Premium_progressives:
        {
         In_network: String,
         Out_of_network: String
        }   
       },
       Frame:
       {
        Collection_frames:
        {
         In_network: String,
         Out_of_network: String
        },
        Non_Collection_frames:
        {
         In_network: String,
         Out_of_network: String    
        }   
       },
       Contact_Lenses:
       {
        Non_Elective_Hard_or_soft_One_pair_per_Calendar_Year:
        {
         In_network: String,
         Out_of_network: String   
        }, 
        Elective_Standard_hard_One_pair_per_Calendar_Year:
        {
         In_network: String,
         Out_of_network: String     
        },
        Elective_Non_standard_hard_One_pair_per_Calendar_Year:
        {
         In_network: String,
         Out_of_network: String   
        },
        Elective_Standard_soft_One_pair_per_month_up_to_6_months_per_Calendar_Year:
        {
         In_network: String,
         Out_of_network: String     
        },
        Elective_Non_standard_soft_One_pair_per_month_up_to_3_months_per_Calendar_Year:
        {
         In_network: String,
         Out_of_network: String   
        }  
       },
       Other_Pediatric_Vision_Benefits:
       {
        Supplemental_low_ision_testing_and_equipment:
        {
         In_network: String,
         Out_of_network: String    
        },
        Diabetes_management_referral:
        {
         In_network: String,
         Out_of_network: String     
        }   
       }  
      }   
     } */ 
      
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

exports.SetBlueShieldNormal = function ()
{
    var BlueShieldCount = 0;
    var NewBlueShieldNormal;
    var ConnectString = ConnectStr();
    var docs = [];
    var FindBlueShield = mongoose.model('BlueShield', schema);
    var BlueShieldNormal = mongoose.model('BlueShieldNormal', SchemaNormal);
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
    FindBlueShield.count({}, function (err, count)
    {
        FindBlueShieldCount = count;
    });
    } catch (err) {
     return (err);
    }; 
    try 
    {
    FindBlueShield.find({}, function (err, docs)
    {

        var i = 0;
        var CurPlanType;
        while (i < FindBlueShieldCount)
        {
            if (docs[i].Plan.indexOf('HMO') >= 0) CurPlanType = 'HMO';
            else CurPlanType = 'PPO';
            NewBlueShieldNormal = new BlueShieldNormal({
                User: docs[i].User,
                Network : docs[i].Network,
                PlanName: docs[i].Plan,
                PlanType: CurPlanType,
                FilePath: docs[i].Path,
                Deductible:
            {
                InNetwork:
             {
                 Member: docs[i].DEDUCTIBLE.Calendar_Year_Medical_Deductible.In_network.Member,
                 Family: docs[i].DEDUCTIBLE.Calendar_Year_Medical_Deductible.In_network.Family
             },
                OutOfNetwork:
            {
                Member: docs[i].DEDUCTIBLE.Calendar_Year_Medical_Deductible.Out_of_network.Member,
                Family: docs[i].DEDUCTIBLE.Calendar_Year_Medical_Deductible.Out_of_network.Family
            }
            },
                OOPLimit:
           {
               InNetwork:
           {
               Member: docs[i].DEDUCTIBLE.Calendar_Year_Out_of_Pocket_Maximum.In_network.Member,
               Family: docs[i].DEDUCTIBLE.Calendar_Year_Out_of_Pocket_Maximum.In_network.Family
           },
               OutOfNetwork:
           {
               Member: docs[i].DEDUCTIBLE.Calendar_Year_Out_of_Pocket_Maximum.Out_of_network.Member,
               Family: docs[i].DEDUCTIBLE.Calendar_Year_Out_of_Pocket_Maximum.Out_of_network.Family
           }
           },
                PCPVisit:
           {
               InNetwork: docs[i].PROFESSIONAL_SERVICES.Professional_Benefits.Physician_office_visits.In_network,
               OutOfNetwork: docs[i].PROFESSIONAL_SERVICES.Professional_Benefits.Physician_office_visits.Out_of_network
           },
                SpecialistVisit:
           {
               InNetwork: docs[i].PROFESSIONAL_SERVICES.Professional_Benefits.Specialist_office_visits.In_network,
               OutOfNetwork: docs[i].PROFESSIONAL_SERVICES.Professional_Benefits.Specialist_office_visits.Out_of_network
           },
                RxGenericTier1:
           {
               InNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Generic_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Generic_drugs.Out_of_network
           },
                RxBrandTier2:
           {
               InNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Preferred_brand_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Preferred_brand_drugs.Out_of_network
            },
                RxNonFormularyTier3:
           {
               InNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Non_preferred_brand_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Non_preferred_brand_drugs.Out_of_network
           },
                 RxNonPreferredTier4:
           {
               InNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Non_preferred_brand_drugs.In_network,
               OutOfNetwork: docs[i].PRESCRIPTION_DRUG_COVERAGE.Retail_Prescriptions.Non_preferred_brand_drugs.Out_of_network
           },
              UrgentCare:
           {
               InNetwork: docs[i].EMERGENCY_HEALTH_COVERAGE.Urgent_care.In_network,
               OutOfNetwork: docs[i].EMERGENCY_HEALTH_COVERAGE.Urgent_care.Out_of_network
           }
            });
            NewBlueShieldNormal.save(function (err, thor)
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
    return('BlueShieldNormal - complet.');
}; 

exports.DelBlueShield = function (array)
{
    var ConnectString = ConnectStr();
    var DelBlueShield = mongoose.model('BlueShield', schema);
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
    DelBlueShield.findOne({ User: array[0], Path: array[1], Plan: array[2], Network: array[23] }, function (err, doc) 
    { 
      DelBlueShield.findByIdAndRemove({'_id' : doc.id}, function (err, thor)
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

exports.SaveBlueShield = function (array)
{
    var ConnectString = ConnectStr();
    var BlueShield = mongoose.model('BlueShield', schema);

    var NewBlueShield = new BlueShield({
        User: array[0],
        Path: array[1],
        Plan: array[2],
        Network: array[23],
        DEDUCTIBLE:
   {
       Calendar_Year_Medical_Deductible:
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
       Calendar_Year_Out_of_Pocket_Maximum:
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
     }
     },
      /* LIFETIME_BENEFIT_MAXIMUM:
      {
          Covered_Services:
       {
           In_network: array[11],
           Out_of_network: array[12]
       }
      },*/
       PROFESSIONAL_SERVICES:
     {
         Professional_Benefits:
      {
          Physician_office_visits:
       {
           In_network: array[11],
           Out_of_network: array[12]
       },
          Specialist_office_visits:
       {
           In_network: array[13],
           Out_of_network: array[14]
       }/*,
          CT_scans_MRIs_MRAs_PET_scans_and_cardiac_diagnostic_procedures_utilizing_nuclear_medicine:
       {
           In_network: array[17],
           Out_of_network: array[18]
       },
          Outpatient_diagnostic_laboratory_and_pathology:
       {
           In_network: array[19],
           Out_of_network: array[20]
       }*/
      }/*,
         Allergy_Testing_and_Treatment_Benefits:
      {
          Office_visits:
       {
           In_network: array[21],
           Out_of_network: array[22]
       }
      },
         Preventive_Health_Benefits:
      {
          Preventive_health_services:
       {
           In_network: array[23],
           Out_of_network: array[24]
       }
      }*/
     },
     /*  OUTPATIENT_SERVICES:
    {
        Hospital_Benefits:
     {
         Outpatient_surgery_performed_at_an_ambulatory_surgery_center:
      {
          In_network: array[25],
          Out_of_network: array[26]
      },
         Outpatient_surgery_in_a_hospital:
      {
          In_network: array[27],
          Out_of_network: array[28]
      },
         Outpatient_services_for_treatment_of_illness_or_injury_and_necessary_supplies:
      {
          In_network: array[29],
          Out_of_network: array[30]
      },
         CT_scans_MRIs_MRAs_PET_scans_and_cardiac_diagnostic_procedures_utilizing_nuclear_medicine_performed_in_a_hospital:
      {
          In_network: array[31],
          Out_of_network: array[32]
      },
         Outpatient_diagnostic_X_ray_and_imaging_performed_in_a_hospital:
      {
          In_network: array[33],
          Out_of_network: array[34]
      },
         Outpatient_diagnostic_laboratory_and_pathology_performed_in_a_hospital:
      {
          In_network: array[35],
          Out_of_network: array[36]
      },
         Bariatric_surgery:
      {
          In_network: array[37],
          Out_of_network: array[38]
      }
     }
    },
       HOSPITALIZATION_SERVICES:
    {
        Hospital_Benefits:
     {
       Inpatient_physician_services:
      {
          In_network: array[39],
          Out_of_network: array[40]
      },
         Inpatient_non_emergency_facility_services:
      {
          In_network: array[41],
          Out_of_network: array[42]
      },
         Bariatric_surgery:
      {
          In_network: array[43],
          Out_of_network: array[44]
      }
     },
        Skilled_Nursing_Facility_Benefits:
     {
         Services_from_a_free_standing_skilled_nursing_facility:
      {
          In_network: array[45],
          Out_of_network: array[46]
      },
         Skilled_nursing_unit_of_a_hospital:
      {
          In_network: array[47],
          Out_of_network: array[48]
      }
     }
    },*/
       EMERGENCY_HEALTH_COVERAGE:
    {
     /*   Emergency_room_services_not_resulting_in_admission:
     {
         In_network: array[49],
         Out_of_network: array[50]
     },
     Emergency_room_services_resulting_in_admission:
     {
       
         In_network: array[51],
         Out_of_network: array[52]  
     },
     Emergency_room_physician_services:
     {
        In_network: array[53],
        Out_of_network: array[54]  
     },*/
     Urgent_care:
     {
        In_network: array[15],
        Out_of_network: array[16]   
     }
    },/*
    AMBULANCE_SERVICES:
    {
     Emergency_or_authorized_transport:
     {
        In_network: array[57],
        Out_of_network: array[58]   
     }   
    },*/
     PRESCRIPTION_DRUG_COVERAGE:
     {
       Retail_Prescriptions:
       {
       /* Contraceptive_drugs_and_devices:
        {
         In_network: array[59],
         Out_of_network: array[60]   
        },*/
        Generic_drugs:
        {
         In_network: array[17],
         Out_of_network: array[18]      
        },
        Preferred_brand_drugs:
        {
         In_network: array[19],
         Out_of_network: array[20]   
        },
        Non_preferred_brand_drugs:
        {
         In_network: array[21],
         Out_of_network: array[22]     
        }   
       }/*,
       Mail_Service_Prescriptions:
       {
        Contraceptive_drugs_and_devices:
        {
         In_network: array[67],
         Out_of_network: array[68]   
        },
        Generic_drugs:
        {
         In_network: array[69],
         Out_of_network: array[70]    
        },
        Preferred_brand_drugs:
        {
         In_network: array[71],
         Out_of_network: array[72]   
        },
        Non_preferred_brand_drugs:
        {
         In_network: array[73],
         Out_of_network: array[74]   
        }   
       },
       Specialty_Pharmacies:
       {
        Specialty_drugs:
        {
         In_network: array[75],
         Out_of_network: array[76]    
        }   
       } */ 
     }/*,
     PROSTHETICS_ORTHOTICS:
     {
      Prosthetic_equipment_and_devices:
      {
       In_network: array[77],
       Out_of_network: array[78]    
      },
      Orthotic_equipment_and_devices:
      {
       In_network: array[79],
       Out_of_network: array[80]    
      }   
     },
     DURABLE_MEDICAL_EQUIPMENT:
     {
      Breast_pump:
      {
       In_network: array[81],
       Out_of_network: array[82]   
      },
      Other_durable_medical_equipment:
      {
       In_network: array[83],
       Out_of_network: array[84]     
      }   
     },
     MENTAL_HEALTH_SERVICES:
     {
      Inpatient_hospital_services:
      {
       In_network: array[85],
       Out_of_network: array[86]   
      },
      Outpatient_mental_healt_services:
      {
       In_network: array[87],
       Out_of_network: array[88]    
      }   
     },
     CHEMICAL_DEPENDENCY_SERVICES:
     {
      Inpatient_hospital_services_for_medical_acute_detoxification:
      {
       In_network: array[89],
       Out_of_network: array[90]   
      },
      Outpatient_substance_abuse_services:
      {
       In_network: array[91],
       Out_of_network: array[92]    
      }   
     },
     HOME_HEALTH_SERVICES:
     {
      Home_health_care_agency_services:
      {
       In_network: array[93],
       Out_of_network: array[94]   
      },
      Home_infusion_home_intravenous_injectable_therapy_and_infusion_nursing_visits_provided_by_a_home_infusion_agency:
      {
       In_network: array[95],
       Out_of_network: array[96]   
      }   
     },
     OTHER:
     {
      Hospice_Program_Benefits:
      {
       Routine_home_care:
       {
        In_network: array[97],
        Out_of_network: array[98]   
       },
       Inpatient_respite_care:
       {
        In_network: array[99],
        Out_of_network: array[100]    
       },   
       hour_24_continuous_home_care:
       {
        In_network: array[101],
        Out_of_network: array[102]   
       },
       Shor_term_inpatient_care_for_pain_and_symptom_management:
       {
        In_network: array[103],
        Out_of_network: array[104]    
       }
      },
      Chiropractic_Benefits:
      {
       Chiropractic_services:
       {
        In_network: array[105],
        Out_of_network: array[106]    
       }   
      },
      Acupuncture_Benefits:
      {
       Acupuncture_by_a_licensed_acupuncturist:
       {
        In_network: array[107],
        Out_of_network: array[108]   
       },
       Acupuncture_by_doctors_of_medicine:
       {
        In_network: array[109],
        Out_of_network: array[110]    
       }   
      },
      Rehabilitation_Benefits:
      {
       Office_location:
       {
        In_network: array[111],
        Out_of_network: array[112]   
       }   
      },
      Pregnancy_and_Maternity_Care_Benefits:
      {
       Prenatal_and_preconception_physician_office_visit_initial_visit:
       {
        In_network: array[113],
        Out_of_network: array[114]   
       },
       Prenatal_and_preconception_physician_office_visit_subsequent_visits:
       {
        In_network: array[115],
        Out_of_network: array[116]   
       },
       Postnatal_physician_office_visits:
       {
        In_network: array[117],
        Out_of_network: array[118]    
       }   
      },
      Family_Planning_Benefits:
      {
       Counseling_and_consulting:
       {
        In_network: array[119],
        Out_of_network: array[120]   
       },
       Elective_abortion:
       {
        In_network: array[121],
        Out_of_network: array[122]    
       },
       Tubal_ligation:
       {
        In_network: array[123],
        Out_of_network: array[124]    
       },
       Vasectomy:
       {
        In_network: array[125],
        Out_of_network: array[126]   
       }   
      },
      Diabetes_Care_Benefits:
      {
       Devices_equipment_and_non_testing_supplies:
       {
        In_network: array[127],
        Out_of_network: array[128]   
       },
       Diabetes_self_management_training:
       {
        In_network: array[129],
        Out_of_network: array[130]   
       }   
      },
      Care_Outside_of_Plan_Service_Area:
      {
       Within_US_BlueCard_Program:
       {
        In_network: array[131],
        Out_of_network: array[132]   
       },
       Outside_of_US_BlueCard_Worldwide:
       {
        In_network: array[133],
        Out_of_network: array[134]     
       }   
      }   
     },
     Pediatric_Vision_Benefits:
     {
      Comprehensive_Eye_Exam:
      {
       Ophthalmologic:
       {
        Routine_ophthalmologic_exam_with_refraction_new_patient:
        {
         In_network: array[135],
         Out_of_network: array[136]   
        },
        Routine_ophthalmologic_exam_with__refraction_established_patient:
        {
         In_network: array[137],
         Out_of_network: array[138]    
        }   
       },
       Optometric:
       {
        New_patient_exams:
        {
         In_network: array[139],
         Out_of_network: array[140]   
        },
        Established_patient_exams:
        {
         In_network: array[141],
         Out_of_network: array[142]    
        }   
       }   
      },
      Eyeglasses:
      {
       Lenses_one_pair_per_calendar_year:
       {
        Single_vision:
        {
         In_network: array[143],
         Out_of_network: array[144]   
        },
        Conventional_bifocal:
        {
         In_network: array[145],
         Out_of_network: array[146]   
        },
        Conventional_trifocal:
        {
         In_network: array[147],
         Out_of_network: array[148]    
        },
        Lenticular:
        {
         In_network: array[149],
         Out_of_network: array[150]    
        },
        Lenses_include_choice_of_glass_plastic_or_polycarbonate_lenses_all_lens_powers:
        {
         In_network: array[151],
         Out_of_network: array[152]   
        }   
       },
       Optional_Lenses_and_Treatments:
       {
        UV_coating:
        {
         In_network: array[153],
         Out_of_network: array[154]   
        },
        Anti_reflective_coating:
        {
         In_network: array[155],
         Out_of_network: array[156]    
        },
        High_index_lenses:
        {
         In_network: array[157],
         Out_of_network: array[158]    
        },
        Photochromic_lenses_plastic:
        {
         In_network: array[159],
         Out_of_network: array[160]   
        },
        Photochromic_lenses_glass:
        {
         In_network: array[161],
         Out_of_network: array[162]   
        },
        Polarized_enses:
        {
         In_network: array[163],
         Out_of_network: array[164]   
        },
        Standard_progressives:
        {
         In_network: array[165],
         Out_of_network: array[166]    
        },
        Premium_progressives:
        {
         In_network: array[167],
         Out_of_network: array[168]    
        }   
       },
       Frame:
       {
        Collection_frames:
        {
         In_network: array[169],
         Out_of_network: array[170]   
        },
        Non_Collection_frames:
        {
         In_network: array[171],
         Out_of_network: array[172]      
        }   
       },
       Contact_Lenses:
       {
        Non_Elective_Hard_or_soft_One_pair_per_Calendar_Year:
        {
         In_network: array[173],
         Out_of_network: array[174]    
        }, 
        Elective_Standard_hard_One_pair_per_Calendar_Year:
        {
         In_network: array[175],
         Out_of_network: array[176]      
        },
        Elective_Non_standard_hard_One_pair_per_Calendar_Year:
        {
         In_network: array[177],
         Out_of_network: array[178]   
        },
        Elective_Standard_soft_One_pair_per_month_up_to_6_months_per_Calendar_Year:
        {
         In_network: array[179],
         Out_of_network: array[180]     
        },
        Elective_Non_standard_soft_One_pair_per_month_up_to_3_months_per_Calendar_Year:
        {
         In_network: array[181],
         Out_of_network: array[182]    
        }  
       },
       Other_Pediatric_Vision_Benefits:
       {
        Supplemental_low_ision_testing_and_equipment:
        {
         In_network: array[183],
         Out_of_network: array[184]    
        },
        Diabetes_management_referral:
        {
         In_network: array[185],
         Out_of_network: array[186]      
        }   
       }  
      }   
     } */  
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
    NewBlueShield.save(function (err, thor)
    {
        if (err) return console.error(err);
        console.dir(thor);
    });
     } catch (err) {
     return (err);
    }; 
     mongoose.disconnect();
    return ('BlueShield - complet. User - ' + array[0] + '; Path -' + array[1] + '; Plan - ' + array[2] + '; Network - ' + array[23]);
};
