const express=require("express")
const { config } = require("./config/db")
const { userRouter } = require("./Routes/user.routes")

const { auth } = require("./middleware/auth")

const cookieParser = require('cookie-parser');
const { DataRouter } = require("./Routes/Data.routes");
const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(cors());
app.use(cookieParser());
app.use(express.json())




app.use("/user",userRouter)
app.use("/answer",DataRouter)
// app.use(auth)







app.listen(5038,async()=>{
    await config
    console.log("connected to port")
})