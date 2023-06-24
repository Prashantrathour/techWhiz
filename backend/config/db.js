const mongoose=require("mongoose")

// require("dotenv").config()

const config=mongoose.connect("mongodb://localhost:27017/Hekcathon")

module.exports={config}