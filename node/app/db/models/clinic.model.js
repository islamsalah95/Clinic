const mongoose = require("mongoose");
const clinicSchema = mongoose.Schema({
    id:{
        type:String,
        required:true,
        default:Date.now(),
        unique:true,

    }, 
    name:{
        type:String,
        required:true,
        trim:true,
    }, 
   
   
})
const Clinic = mongoose.model("Clinic", clinicSchema)
module.exports=Clinic