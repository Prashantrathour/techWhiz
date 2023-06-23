const mongoose=require("mongoose")

// require("dotenv").config()

const config=mongoose.connect("mongodb://localhost:27017/Heacathon")

module.exports={config}