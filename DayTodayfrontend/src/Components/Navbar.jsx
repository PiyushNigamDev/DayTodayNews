  // import { a } from "react-router-dom"
// import {useState} from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
const Navbar =()=>{
  // const [openModal,setOpenModal]=useState(false)
  const location=useLocation();
   
return(
    <>
    
<nav className="  bg-gray-700 cursor-pointer">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-gray-100 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div className=" sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
          <h1 className=" text-2xl font-bold text-orange-600 bg-clip-text  tracking-[2px]">DayTodayNews</h1>
        </div>
        <div className="hidden sm:ml-6   sm:block lg:mt-3"> 
            
            <div className="flex relative left-40 lg:gap-50">
             {/* <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="w-56 rounded-md bg-white/90 px-3 py-2 text-sm text-gray-800 
                 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
    <svg
      className="absolute left-50 top-2.5 h-4 w-4 text-gray-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35m1.85-5.4a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0Z"
      />
    </svg>
  </div> */}

        <div className="box">
<Link to="/home" aria-current="page" className="rounded-md  px-3 py-2 text-md 
            font-medium text-gray-100 hover:bg-gradient-to-r
             hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent
            cursor-pointer ">Home</Link>



             <a to="/" aria-current="page" className="rounded-md  px-3 py-2 text-md 
            font-medium text-gray-100 hover:bg-gradient-to-r
             hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent
            cursor-pointer ">Sports</a>
            <a href="#" className="rounded-md  px-3 py-2 text-md
            font-medium text-gray-100  hover:bg-gradient-to-r
             hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent
          cursor-pointer">Politics</a>
            <a to="/breakfast" className="rounded-md  px-3 py-2 text-md 
            font-medium text-gray-100 hover:bg-gradient-to-r
             hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent
          cursor-pointer">Social</a>
            <Link to="/international" className="rounded-md  px-3 py-2 text-md 
            font-medium text-gray-100 hover:bg-gradient-to-r
             hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent
         cursor-pointer ">International</Link>



{/* <h1> 
 <button type="button" className=" rounded-full p-1 text-white 
        border  hover:border-white cursor-pointer shadow-2xl  bg-gradient-to-r from-purple-500
                to-pink-500 font-semibold bg-text-500
         px-3" >
          <Link to="/login">
          Log in
          </Link>
        </button>
        </h1>


         <button type="button" className="r rounded-full p-1 text-white 
                border  hover:border-white cursor-pointer shadow-2xl bg-gradient-to-r from-purple-500
                to-pink-500 font-semibold   px-1 ">
                  <Link to="/register">Register</Link></button> */}
          </div>



        </div>
      </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {/* <button type="button" className="relative rounded-full p-1 text-white 
        border  hover:border-white cursor-pointer shadow-2xl  bg-gradient-to-r from-purple-500
                to-pink-500 font-semibold bg-text-500
         px-3" >
          <Link to="/login">
          Log in
          </Link>
        </button> */}


{/* {openModal&& (
  <div className="  rounded fixed inset-0 z-50 flex items-center justify-center bg-black/85 ">
 
      <form className="text-center bg-white rounded-xl px-25  ">
        <h1 className="text-3xl text-red-600 justify-items-end " onClick={()=>setOpenModal(false)}>&times;</h1>
               <h1 className="text-xl font-bold my-2 text-black">Login</h1>

        <div className="my-3">
          <h2 className="font-bold text-black">Username</h2>
          <input
            type="text"
            placeholder="enter username"
      
            className="bg-blue-200 rounded"
            required
          />
        </div>

        <div className="my-3">
          <h2 className="font-bold text-black">Password</h2>
          <input
            type="password"
            placeholder="enter password"
        
            className="bg-blue-200 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="px-2 rounded cursor-pointer hover:scale-85 transition my-0 text-gray-100 hover:bg-red-400 py-1 bg-blue-600"
        >
          Login
        </button>

<p className="text-gray-700 font-semibold">or</p>
        <h1 className="font-semibold text-gray-600"> create new account? <span className="text-black
        font-bold" onClick={()=>setOpenModal(false)}><a to="/signup">Signup</a></span></h1>
      </form>
    </div>
)} */}






        {/* <button type="button" className="relative rounded-full p-1 text-white 
                border  hover:border-white cursor-pointer shadow-2xl bg-gradient-to-r from-purple-500
                to-pink-500 font-semibold   px-1 ">
                  <Link to="/register">Register</Link></button> */}

        {/* <!-- Profile dropdown --> */}
        {/* <el-dropdown className="relative ml-3"> */}
          {/* <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
          </button> */}

          {/* <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</a>
          </el-menu>
        </el-dropdown> */}
      </div>
    </div>
  </div>

  <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
      {/* <!-- Current: "bg-gray-900 text-gray-100", Default: "text-gray-300 hover:bg-white/5 hover:text-gray-100" --> */}
      <a href="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-gray-100">Dashboard</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-gray-100">Team</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-gray-100">Projects</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-gray-100">Calendar</a>
    </div>
  </el-disclosure>
</nav>

    </>
)
}
export default Navbar