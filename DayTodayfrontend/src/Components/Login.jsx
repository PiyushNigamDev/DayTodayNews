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
const log=await axios.post("https://daytodaynews-backend.onrender.com/student/login",{
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
  <form
    onSubmit={loginned}
    className="max-w-4xl mx-auto my-10 px-4"
  >
    <div className="grid md:grid-cols-2 shadow-2xl shadow-gray-400 rounded-xl overflow-hidden">

      {/* Left Section */}
      <div
        className="flex items-center justify-center text-white p-6 md:p-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/purple-gradient-background_969965-38053.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Welcome to DayTodayNews Dashboard
        </h1>
      </div>

      {/* Right Section */}
      <div className="p-6 md:p-10 bg-white">
        <h1 className="font-bold text-purple-600 text-xl mb-4 text-center">
          USER LOGIN
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="font-semibold text-black block mb-1">
            User Email
          </label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-purple-100 p-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="font-semibold text-black block mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-purple-100 p-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
        >
          Login
        </button>

        <p className="text-gray-600 text-center my-3">or</p>

        <p className="text-center text-gray-600">
          Create new account?{" "}
          <span className="text-purple-700 font-bold">
            <Link to="/register">Signup</Link>
          </span>
        </p>
      </div>
    </div>
  </form>
</>
    )
}
export default Login