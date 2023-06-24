const mongoose=require("mongoose")

require("dotenv").config()

const config=mongoose.connect(process.env.mongoUrl)

module.exports={config}