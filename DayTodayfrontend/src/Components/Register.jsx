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
const regist=await axios.post("https://daytodaynews.onrender.com/student/register",{
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
  <div className="py-10 px-4">
    <div className="bg-white mx-auto w-full max-w-4xl rounded-xl grid md:grid-cols-2 shadow-2xl shadow-amber-900 overflow-hidden">

      {/* Left Section */}
      <div
        className="flex items-center justify-center text-white p-6 md:p-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/glowing-particles-dark-with-bokeh-effect-abstract-background_1174726-2981.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-xl md:text-2xl font-bold text-center">
          Welcome to DayTodayNews Dashboard
        </h1>
      </div>

      {/* Right Section */}
      <form onSubmit={register} className="p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-6">
          Register
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm font-semibold block mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-red-100 p-2 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm font-semibold block mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-red-100 p-2 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm font-semibold block mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-red-100 p-2 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 py-2 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</>
    )
}
export default Register