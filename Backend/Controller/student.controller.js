// import { data } from "react-router-dom";
import Register from "../models/Register.js";
import Student from "../models/Student.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
// dotenv.config()
// connectDB()


const jwtTokenGenerator=(existingUser)=>{
    return jwt.sign({...existingUser},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
}

export const registerStudent=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
 const regist= await Register.findOne({email}).select("+password");
 if(regist){
    return res.status(400).json({
status:false,
message:"user already registered"
    })
    
 }
 const newUser=new Register({name,email,password});
   await newUser.save()
    return res.status(201).json({
        status:true,
message:"user successfully registered",
data:newUser
    })


    }catch(err){
        res.status(500).json({
            message:err.message,

        })
    }
}



export const loginStudent=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const existingUser=await Register.findOne({email}).select("+password")
        // if(existingUser){
        //     return res.status(200).json({
        //         message:"user successfully logged in"
        //     })
        // }
        // else{
        //     return res.status(400).json({
        //         message:"user not registered "
        //     })
        // }
if(!(existingUser&&(await existingUser.matchPassword(password)))){
    return res.status(400).json({
        message:"invalid email or password"
    })
}else{

const token=jwtTokenGenerator({
    id:existingUser._id,
    name:existingUser.name,
    email:existingUser.email
})
return res.status(200).json({
    message:"user successfully logged in",
    token:token
})

}

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}


export  const createStudent=async(req,res)=>{
        
//  const {title,content,slug,short_description,author,source,category,language}=req.body; 
  try{
const newStudent= await Student.create(req.body);
res.status(201).json({
    status:true,
    message:"user successfully created",
    data:newStudent
})
  }catch(err){
            res.status(500).json({
                message:err.message,
                status:false
            })
        }
}




export const updateNews= async(req,res)=>{
    // const {thumbnail}=req.body;
    try{
if(req.file){
    req.body.thumbnail=`uploads/${req.file.filename}`
}
        const editNews= await Student.findByIdAndUpdate(req.params.id,req.body,
            {new:true}
        );
        res.status(200).json({
            status:true,
            message:"news updated",
            data:editNews,
            // new:true
        })
    }catch(err){
        res.status(500).json({
            status:false,
            message:err.message
        })
    }
}





export const getUser=async(req,res)=>{
try{
const getUsers= await Student.find()
res.status(200).json({
    status:true,
    message:"get student data successfully",
    data:getUsers
})
}   catch(err){
    res.status(500).json({
        message:err.message,
        status:false
    })
} 
}

export const getbyId=async(req,res)=>{
    try{
const id=await Student.findById(req.params.id);
return res.status(201).json({
    message:"successfully get the data by id",
    status:true,
    data:id
})
    }catch(err){
        res.status(500).json({
            message:err.message,
            status:false
        })
    }
}



export const delUser=async(req,res)=>{
    try{
const delUsers= await Student.findByIdAndDelete(req.params.id)                            
res.status(200).json({
    status:true,
    message:"student data deleted",
data:delUsers
})
}catch(err){
          res.status(500).json({
            status:false,
            message:err.message
        })
    }
}



// export const registerStudent=async(req,res)=>{
// const {name,email,password}=req.body;
// try{
//     const regist=await Student.findOne({email});
//     if(regist){
//    return     res.status(400).json({
// message:"User already registered"
//         })
//     }
//     const newUser= new User({name,email,password})
//    await newUser.save()
//         res.status(200).json({
//             message:"user already registered"
//         })
//     }
// catch(err){
//     res.status(500).json({
//         message:err.message
//     })
// }
// }



export const uploadNews=async(req,res)=>{
try{
    const data=req.body;

    if(req.file){
    data.thumbnail=`uploads/${req.file.filename}`;
    console.log("image",req.file)
    }

    const news=await Student.create(data);
    // news.save()
    return res.status(201).json({
        status:true,
        message:"User successfully created",
       data:news
    })

}catch(err){
    res.status(500).json({
        message:err.message
    })
}
}




export const loginAdmin=async(req,res)=>{
    try{

    }catch(err){

    }
}