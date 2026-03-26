import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"
import { useContext } from "react"
import { Auths } from "./Auth"
const Login=()=>{
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
const {setLogin}=useContext(Auths)
  const nav=useNavigate()




const loginned=async(e)=>{
  e.preventDefault()
  try{
const log=await axios.post("http://localhost:3000/student/login",{
  email,
  password
})
console.log(log.data)
localStorage.setItem("token",log.data.token)
console.log("saved token:",localStorage.getItem("token"))
// alert("logged in")
setLogin(true);
Swal.fire({
    text:"user logged in successfully",
    title:"Success!",
    icon:"success"
})
nav("/dashboard")

  }catch(err){
    console.log(err.message)
    Swal.fire({
            text:"user not registered",
            title:"error!",
            icon:"error"
        })
  }
}



    return(
        <>
        {/* <div className="  rounded fixed inset-0 z-50 flex items-center justify-center bg-black/85 "> */}
         
              <form onSubmit={loginned} className="text-center  rounded-xl
              
              shadow-2xl
              
              my-20 max-w-3xl mx-auto h-80 ">


<div className="mainbox grid grid-cols-2 shadow-2xl shadow-gray-500">
                <div className="box  h-80 rounded-tl-lg rounded-bl-lg text-white"
                 style={{backgroundImage:"url('https://img.freepik.com/premium-photo/purple-gradient-background_969965-38053.jpg')",
                  backgroundSize:'cover'
                 }}>
                <h1 className="text-2xl font-bold py-25">Welcome to DayTodayNews Dashboard </h1>

                </div>
                {/* <h1 className="text-3xl text-red-600 justify-items-end " 
                onClick={()=>setOpenModal(false)}>&times;</h1> */}
         <div className="box my-10">
          <h1 className="font-bold text-purple-600">USER LOGIN</h1>
                <div className="my-3">
                  <h2 className="font-bold text-black">User email</h2>
                  <input
                    type="text"
                    placeholder="enter username" value={email} onChange={(e)=>setEmail(e.target.value)} 
                    className="bg-purple-300  rounded-xl"required
                  />
                </div>
        
                <div className="my-3">
                  <h2 className="font-bold text-black">Password</h2>
                  <input
                    type="password"
                    placeholder="enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                    className="bg-purple-300 rounded-xl"
                    required
                  />
                </div>
        
                <button
                  type="submit"
                  className="px-2 rounded cursor-pointer hover:scale-85
                  font-semibold  transition-all duration-200 my-0 text-white hover:bg-red-400 py-1 bg-purple-700">
                  Login
                </button>
        
        <p className="text-gray-700 font-semibold">or</p>
                <h1 className="font-semibold text-gray-600"> create new account? <span className="text-black
                font-bold"><Link to="/register">Signup</Link></span></h1>
 </div>            {/* </div> */}
 </div>
               </form>
 
        </>
    )
}
export default Login