const jwt=require("jsonwebtoken")

require("dotenv").config()

const auth=async(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,"jammi",(err,decode)=>{
           if(decode){
            req.body.userID=decode.userID

            req.userID=decode.userID
            next()
           }else{
            return res.status(401).send({msg:"Login again"})
           }
        })
    }else{
        return res.status(401).send({msg:"Login first"})
    }
}

module.exports={auth}