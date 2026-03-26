import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"
const Register=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

const register=async(e)=>{
    e.preventDefault()
    try{
const regist=await axios.post("http://localhost:3000/student/register",{
    name,
    email,
    password
})
console.log(regist.data)
Swal.fire({
    text:"user registered successfully",
    title:"Success!",
    icon:"success"
})
    }catch(err){
        console.log(err.message)
    Swal.fire({
        text:"user already registered",
        title:"error!",
        icon:"error"
    })
    }
}


    return(
        <>
         <div className="  py-10">
         {/* <h1 className="text-center font-bold text-2xl"></h1> */}
          
   
         <div className="bg-white mx-auto w-full max-w-3xl my-10 rounded   grid grid-cols-2 shadow-2xl shadow-amber-950 ">
            
                 <div className="box  h-auto rounded-tl-lg rounded-bl-lg text-white"
                 style={{backgroundImage:"url('https://img.freepik.com/premium-photo/glowing-particles-dark-with-bokeh-effect-abstract-background_1174726-2981.jpg')",
                  backgroundSize:'cover',backgroundRepeat:"no-repeat"
                 }}>
                <h1 className="text-2xl font-bold relative top-55 text-center">Welcome to DayTodayNews Dashboard </h1>

                </div>

         
           
             <form onSubmit={register} className=" px-3 ">
   <h1 className=" text-4xl text-center font-bold">Register</h1>
             <div className="box1 py-5">
                 <h2 className="text-lg font-bold"> Name<span className="text-red-500">*</span></h2>
                 <input type="text" placeholder="enter name" name="nameS"
               //   value={values.name}
               //   onChange={handleChange}
               //   onBlur={handleBlur} 
                value={name}
               onChange={(e)=>setName(e.target.value)}
         

                 className="bg-red-300 w-full h-10 rounded-3xl mx-2 font-semibold" />
              {/* {errors.name && touched.named?  <p className="text-sm font-semibold text-red-600">{errors.name}</p> :null} */}
             </div>
 
              <div className="box1 py-5">
                 <h2 className="text-lg font-bold"> Email<span className="text-red-500">*</span></h2>
                 <input type="text" placeholder="enter email" 
               //   value={values.email}
               //   onChange={handleChange}
               //   onBlur={handleBlur}
name="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
                 className="bg-red-300 w-full h-10 rounded-3xl mx-2 font-semibold" />
           {/* {errors.email &&touched.email?     <p className="text-sm font-semibold text-red-600">{errors.email}</p>  :null} */}
 
             </div>
 
              <div className="box1 py-5">
                 <h2 className="text-lg font-bold"> Password<span className="text-red-500 ">*</span></h2>
                 <input type="password" placeholder="enter password"
           name="password"     
               //   value={values.password}
               //   onChange={handleChange}
               //   onBlur={handleBlur}
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 className="bg-red-300 w-full  h-10 rounded-3xl mx-2 font-semibold " />
          {/* {errors.password&& touched.password ?   <p className="text-sm font-semibold text-red-600">{errors.password}</p>:null} */}
 
             </div>
 
          
 
             <button className="bg-blue-500 hover:scale-90 transition cursor-pointer px-2 py-1 text-lg font-bold rounded
              hover:bg-red-400 mx-auto flex text-white
           ">Sign Up</button>
 </form>
         </div>
         </div>
        
        </>
    )
}
export default Register