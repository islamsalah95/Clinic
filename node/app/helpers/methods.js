class MyOwnMethods{
    static resGenerator = (res, statusCode, data, message)=>{
        res.status(statusCode).send({
            apiStatus: statusCode==200,
            data, 
            message
        })
    }



}
module.exports=MyOwnMethods