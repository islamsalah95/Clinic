const clinicModel=require("../db/models/clinic.model")
const {resGenerator} = require("../helpers/methods")
const otpp=require("otp-generator")
const nodemailer = require("nodemailer");
const send = require("../helpers/email.helper")


class Clinic{

    static adminAddClinic=async function(req,res){

        try {
            
        // if (req.body.type!="doctor") {
           
        //     throw new Error("not add type doctor")
    
        // }
        
        const clinicData=new clinicModel(req.body)
        await clinicData.save()
        
         resGenerator(res, 200, clinicData, "success")
        
        } catch (error) {
            resGenerator(res, 500, error, "err")
        }
        
        }

    
        static getAllClinics=async function(req,res){

            try {
                
            const userData=await clinicModel.find()
            
             resGenerator(res, 200, userData, "success")
            
            } catch (error) {
                resGenerator(res, 500, error, "err")
            }
            
            }

}

module.exports=Clinic