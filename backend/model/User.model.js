const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
       
      },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: 3
       
      },
    password:String

})

const userModel=mongoose.model("User",userSchema)

module.exports={userModel}