const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")
const otp=require("otp-generator")
const jwt=require("jsonwebtoken")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:2, 
        maxlength:20
    }, 
    age:{
        type:Number,
        default:21,
        min:21,
        max:60
    }, 
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    }, 
    status:{
        type:Boolean,
        default:false
    }, 
    type:{
        type:String,
        required:true,
        trim:true,
        enum:["admin", "user","doctor","nurse"],
        default:"user",
        lowercase:true
    }, 
    depart:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Clinic",
        required: function(){ return this.type=="doctor"},

        //enum:["dentist", "surgery ","eyes","pediatrician"]
    },
    VezeetaPrice:{
        type:Number,
        required: function(){ return this.type=="doctor"},
        min:100,
        default:100
    },
    description:{
        type:String,
        required: function(){ return this.type=="doctor"},
        trim:true,
        minlength:2, 
        default:"public doctor"
    },
    NationalId:{
        type:Number,
        trim:true,
        minlength:14, 
        maxlength:14
    },
   password:{
        type:String,
        required:true,
        trim:true
    }, 
    pImage:{
        type:String,
        trim:true
    }, 
    otp:{
        type:String,
        trim:true,
        minlength:6,
        maxlength:6,
        default:otp.generate(6, { upperCaseAlphabets: false, specialChars: false })
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


userSchema.methods.toJson=function (){
    userData=this.toObject
      delete userData.password
      delete userData.__v
      return userData 

}


userSchema.pre("save", async function(next){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.statics.loginUser=async function(email,password){
  const userData = await User.findOne({email})
  if(!userData) throw new Error("not valid email")
  const matchPass= await bcrypt.compare(password,userData.password)
  if(!matchPass)throw new Error("not valid pass")
  return userData
}

userSchema.methods.generateToken = async function(req,res){
    const userData = this
    const token = jwt.sign({_id: userData._id}, "123")
    userData.tokens = userData.tokens.concat({token})
    await userData.save()
    return token
}
const User = mongoose.model("User", userSchema)
module.exports=User