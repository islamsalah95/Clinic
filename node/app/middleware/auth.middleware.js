const {resGenerator} = require("../helpers/methods")
const userModel = require("../db/models/user.model")
const jwt = require("jsonwebtoken")
const checkUser = async(token)=>{
    const decoded = jwt.verify(token, "123")
    const user = await userModel.findOne({_id: decoded._id, "tokens.token": token})
    if(!user) throw new Error("user not found")
    return user
}
const auth = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user = await checkUser(token)
        req.user = user
        req.token = token
        next()
    }
    catch(e){
        resGenerator(res, 500, e.message, "unauthorized")
    }
}

const authAdmin = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user =await checkUser(token)
        if(user.type != "admin") throw new Error("you are not admin")
        req.user = user
        req.token = token
        // res.send(req.user)
        next()
    }
    catch(e){
        resGenerator(res, 500, e.message, "unauthorized")
    }
}

const doctors = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user =await checkUser(token)
        if(user.type != "doctor") throw new Error("you are not doctors")
        req.user = user
        req.token = token
        // res.send(req.user)
        next()
    }
    catch(e){
        resGenerator(res, 500, e.message, "unauthorized doctors")
    }
}


const nurse = async(req, res, next)=>{
    try{
        const token = req.header("Authorization").replace("Bearer ", "")
        const user =await checkUser(token)
        if(user.type != "nurse") throw new Error("you are not nurse")
        req.user = user
        req.token = token
        // res.send(req.user)
        next()
    }
    catch(e){
        resGenerator(res, 500, e.message, "unauthorized doctors")
    }
}

module.exports={auth, authAdmin,doctors,nurse}