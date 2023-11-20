const express = require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.routes");
require("dotenv").config()

const app = express()

app.use(express.json());

app.use("/user",userRoute)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Database connected!")
    } catch (error) {
        console.log("Database not connected!")
        console.log(error)
    }
    console.log(`server is running on port: ${process.env.port}`)
})