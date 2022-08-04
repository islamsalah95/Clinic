const mongoose = require("mongoose");
const validator = require("validator")

const stuffNationalIdSchema = mongoose.Schema({
    NationalId:{
        type:Number,
        required:true,
        trim:true,
        minlength:14, 
        maxlength:14,
        unique:true
    }, 
    type:{
        type:String,
        required:true,
        trim:true,
        enum:["admin","doctor","nurse"],
        lowercase:true
    }
    ,department:{
        type:String,
        required:true,
        trim:true,
        default:"public"
    },
    VezeetaPrice:{
        type:Number,
        required:true,
        min:100,
        default:100
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minlength:2, 
        default:"public doctor"
    }
})


const StuffNationalId = mongoose.model("StuffNationalId", stuffNationalIdSchema)
module.exports=StuffNationalId