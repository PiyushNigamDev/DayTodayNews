// // import Register from "../models/Register.js";
// import dotenv from "dotenv";
// import jwt from "jsonwebtoken"
 
// dotenv.config()

//  const auth=async(req,res,next)=>{
//     let token;
//     const {authorization} = req.headers;
//     if(authorization&&authorization.startsWith("Bearer ")){
//         token=authorization.split(" ")[1];
//         try{
//             const decoded=jwt.verify(token,process.env.JWT_SECRET)
//             req.existingUser=decoded;
//             next();

//         }catch(err){
//             res.status(401).json({
//                 message:err.message
//             })
//         }
//     }else{
//          return   res.status(401).json({
//                 message:"Unauthorized :no token provided"
//             })
        
//     }
//  }
//  export default auth;

import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();
const Auth =async(req,res,next)=>{
    let token;
    const {authorization}=req.headers;
    if(authorization&&authorization.startsWith("Bearer ")){
        token=authorization.split(" ")[1];
        try{
const decoded= jwt.verify(token,process.env.JWT_SECRET);
req.userExist=decoded;
next()
        }catch(err){
            return res.status(500).json({
                message:err.message,
                status:false
            })
        }
    }else{
        return res.status(401).json({
            message:"Unauthorized:No token Provided",
            status:false
        })
    }
}
export default Auth;