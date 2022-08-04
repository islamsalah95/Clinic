const PatientHistoryModel=require("../db/models/patientHistory.model")
const {resGenerator} = require("../helpers/methods")


class PatientHistory{
   
    
    static addPatientHistory=async function(req,res){

        try {
            
        
        const clinicData=new PatientHistoryModel({...req.body,UserId: req.user._id})
        await clinicData.save()
        
         resGenerator(res, 200, clinicData, "success")
        
        } catch (error) {
            resGenerator(res, 500, error.message, "err")
        }
        
        }




        static getSinglePatientHistory=async function(req,res){

            try {
                
            const clinicData=await PatientHistoryModel.find({patientId:req.body.patientId})
            
            
             resGenerator(res, 200, clinicData, "success")
            
            } catch (error) {
                resGenerator(res, 500, error.message, "err")
            }
            
            }


    }

   

module.exports=PatientHistory