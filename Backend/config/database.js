import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONO_DB_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
