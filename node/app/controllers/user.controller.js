const userModel=require("../db/models/user.model")
const clinicModel=require("../db/models/clinic.model")
const {resGenerator} = require("../helpers/methods")
const otpp=require("otp-generator")
const nodemailer = require("nodemailer");
const send = require("../helpers/email.helper")
const stuffNationalIdModel = require("../db/models/stuffNationalId.model")



//////////////////////////
const express = require("express");
const app = express();
const path = require("path");
const YOUR_DOMAIN = "http://localhost:3000";

app.use(express.static(path.join(__dirname, "views")));

// middleware
app.use(express.json());
////////////////////////

class User{
    
    static stripe=async (req, res) => {
   

    }
    

    static me = async(req,res)=>resGenerator(res, 200, req.user, "data featched")
    
    
    
    
    static login=async function(req,res){


        try{
            const userData = await userModel.loginUser(req.body.email, req.body.password)
           // if(!userData.status) return resGenerator(res, 500, {otp: userData.otp}, "activate first")
            const token = await userData.generateToken()
            resGenerator(res, 200, {user:userData, token}, "registered")
        }catch (error) {
            resGenerator(res, 500, error.message, error)
        }
        
        
        
        }


        static logout=async function(req,res){

            
            try{
                req.user.tokens = []
                await req.user.save()
              
            
              
                res.send({apiStatus:true, data: req.user, message:"logged out all"})
                        }catch (error) {
                resGenerator(res, 500, error, "err")
            }
            
            
            
            }



static register=async function(req,res){

    try {
       
       
        let newUser=null    

    const userData = await stuffNationalIdModel.findOne({NationalId:req.body.NationalId})
if (!userData) {
    const newUser=new userModel(req.body)
    await newUser.save()
}

    
else if(userData.type=="doctor") {
    const newUser=new userModel({...req.body,type:"doctor",depart:userData.department,
    VezeetaPrice:userData.VezeetaPrice,description:userData.description})
    await newUser.save()
} 


else {
        const newUser=new userModel({...req.body,type:"nurse",depart:userData.department
        ,VezeetaPrice:userData.VezeetaPrice,description:userData.description})
        await newUser.save()
    } 
   
    



    
    // const userData=new userModel(req.body)
    // await userData.save()
    
     resGenerator(res, 200, newUser, "success")
    
    } catch (error) {
        resGenerator(res, 500, error.message, "err")
    }
    
    }



    static activate = async(req, res)=>{
        try{
            const userData = await userModel.loginUser(req.body.email, req.body.password)
            if(userData.status) throw new Error("already active")
            if(userData.otp!=req.body.otp) throw new Error("invalid otp")
            userData.status=true
            userData.otp=null
            await userData.save()
            resGenerator(res, 200, userData, "ACTIVATED")
        }
        catch(e){
            resGenerator(res, 500, e.message, "cann't activate user")
        }
    } 




    static forget = async(req, res)=>{
        try{
            const userData = await userModel.findOne({email:req.body.email})
            const newOtp=otpp.generate(6, { upperCaseAlphabets: false, specialChars: false })
             userData.otp=newOtp
            ///////////////////////////////////////////////////////////
            
const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587 ,
    auth: {
              user:"5d93b5af4dbd7c",
             pass:"46cdcb987628a3"
    }
  });
  

  
  var mailOptions = {
    from: '"Example Team" <clinic@gmail.com>',
    to: req.body.email,
    subject: 'OTP',
    text:`your otp : ${newOtp}`,
    html: `your otp : ${newOtp}`,
   
  };
  
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });


            ////////////////////////////////////////////////////////////     

            userData.save()

            resGenerator(res, 200, userData, "success")
        }
        catch(e){
            resGenerator(res, 500, e, "err")
        }
    } 
    



    static updatePass=async function(req,res){


        try{
            const userData = await userModel.findOne({otp:req.body.otp})
            if(!userData) throw new Error("invalid otp")
            userData.password=req.body.password
            userData.otp=null
            userData.save()
           
           
           
           
           resGenerator(res, 200,userData, "done")
        } catch (error) {
            resGenerator(res, 500, error, "err")
        }
        
        
        
        }

////////////////////////admin//////////////////////////
    
static adminAddDoctors=async function(req,res){

    try {
        
    if (req.body.type!="doctor") {
       
        throw new Error("not add type doctor")

    }
    
    const userData=new userModel(req.body)
    await userData.save()
    
     resGenerator(res, 200, userData, "success")
    
    } catch (error) {
        resGenerator(res, 500, error, "err")
    }
    
    }

    
    
    static getAllDoctors=async function(req,res){

        try {
            
        const userData=await userModel.find({type:"doctor"})
        
         resGenerator(res, 200, userData, "success")
        
        } catch (error) {
            resGenerator(res, 500, error, "err")
        }
        
        }
 
        static getAllUsers=async function(req,res){

            try {
                
            const userData=await userModel.find({type:"user"})
            
             resGenerator(res, 200, userData, "success")
            
            } catch (error) {
                resGenerator(res, 500, error, "err")
            }
            
            }

        
    
    


        

}

module.exports=User