// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/database.js";
// import newsRoutes from "./router/Router.js";
// import Student from "./models/Student.js";

// dotenv.config();
// connectDB();

// const app = express();

// // Allowed frontend URLs
// const allowedOrigins = [
//   "https://day-today-news.vercel.app", // main frontend
//   "http://localhost:5173", // local dev
//   "https://day-today-news-git-main-piyushnigam2355-2854s-projects.vercel.app", // preview URL
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true); // allow Postman or server-to-server requests
//       if (allowedOrigins.indexOf(origin) === -1) {
//         return callback(new Error("CORS policy does not allow this origin"), false);
//       }
//       return callback(null, true);
//     },
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use("/uploads", express.static("uploads"));
// app.use("/student", newsRoutes);

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.get("/search", async (req, res) => {
//   const keyword = req.query.q;
//   const result = await Student.find({ title: { $regex: keyword, $options: "i" } });
//   res.json(result);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import newsRoutes from "./router/Router.js";
import Student from "./models/Student.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Allowed frontend domains
const allowedOrigins = [
  "https://day-today-news.vercel.app",
  "https://day-today-news-git-main-piyushnigam2355-2854s-projects.vercel.app",
  "https://day-today-news-p87ki71yj-piyushnigam2355-2854s-projects.vercel.app",
  "http://localhost:5173" // Local Vite dev
];

// Configure CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman/server-to-server
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error("CORS policy does not allow this origin"), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Parse JSON requests
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/student", newsRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API is running");
});

// Search endpoint
app.get("/search", async (req, res) => {
  const keyword = req.query.q;
  try {
    const result = await Student.find({ title: { $regex: keyword, $options: "i" } });
    res.json({ status: true, data: result });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});