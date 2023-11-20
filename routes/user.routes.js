const express = require("express")
const userRoute = express.Router()
const {adduser, getUser,getUserById, deleteUser,updateUser} = require("../controller/user");



userRoute.post("/adduser",adduser)
userRoute.get("/getuser",getUser)
userRoute.get("/getuser/:id",getUserById)
userRoute.delete("/deleteuser/:id",deleteUser)
userRoute.put("/updateuser/:id",updateUser)


module.exports = { 
    userRoute
}