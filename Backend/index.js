import express from "express"
import cors from "cors"
import dotenv from "dotenv"
// import { createStudent,updateNews,getUser, delUser } from "./Controller/student.controller.js"
import connectDB from "./config/database.js"
import newsRoutes from "./router/Router.js"
import Student from "./models/Student.js"
// import auth from "./middleware/auth.js"

connectDB()
dotenv.config()
const app=express()

app.use(cors())
app.use(express.json())
const port=3000

app.get("/", (req,res)=>{
    res.send("api is running")
})

app.use("/uploads", express.static("uploads"));

app.use("/student",newsRoutes)

app.get("/search", async(req,res)=>{
    let keyword=req.query.q;
    let result=await Student.find({
        title:{$regex:keyword,$options:"i"}
    });
    res.json(result);

})
app.listen(port,()=>{
    console.log("server is running on port 3000")
})
