const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    token:String
    

})

const LogoutModel=mongoose.model("Logout",userSchema)

module.exports={LogoutModel}