import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
const connectDB=async ()=>{
    try{
     await  mongoose.connect(process.env.MONO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
           console.log("Database connected successfully")
        } catch(err){
        console.log(err.message)
        process.exit(1)
    }
}
export default connectDB
