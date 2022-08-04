const StuffNationalIdModel=require("../db/models/stuffNationalId.model")
const {resGenerator} = require("../helpers/methods")


class StuffNationalId{
    
    static addNationalId=async function(req,res){

        try {
            
        const userData=new StuffNationalIdModel(req.body)
         await userData.save()
        
         resGenerator(res, 200, userData, "success")
        
        } catch (error) {
            resGenerator(res, 500, error.message, "err")
        }
        
        
        
        }
   

    }

module.exports=StuffNationalId