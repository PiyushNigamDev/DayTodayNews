import express from "express"
import cors from "cors"
import dotenv from "dotenv"
// import { createStudent,updateNews,getUser, delUser } from "./Controller/student.controller.js"
import connectDB from "./config/database.js"
import newsRoutes from "./router/Router.js"
import Student from "./models/Student.js"
// import auth from "./middleware/auth.js"
dotenv.config();
connectDB();
const app=express()

// import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "https://day-today-news.vercel.app"
];

 
app.use(
  cors({
    origin: [
      "https://day-today-news.vercel.app", // old domain
      "https://day-today-news-299jlmpux-piyushnigam2355-2854s-projects.vercel.app" // current frontend
    ],
    credentials: true,
  })
);
app.use(express.json())
// const port=3000

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
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});