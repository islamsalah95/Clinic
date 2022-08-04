const mongoose = require("mongoose");
const validator = require("validator")


const patientHistorySchema = mongoose.Schema({
    medicineName:{
        type:String,
        required:true,
        trim:true,
        minlength:2, 
        maxlength:20
    }, 
    DoctorId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }, 
    date:{
    type:Date,
    default:Date.now()
    },
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
    
})


const patientHistory = mongoose.model("PatientHistory", patientHistorySchema)
module.exports=patientHistory

