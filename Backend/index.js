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
  "https://day-today-news.vercel.app", // main production frontend
  "http://localhost:5173", // local dev frontend (if using Vite)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);
app.use(cors({ origin: "*", credentials: true }));
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