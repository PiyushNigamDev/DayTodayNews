import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from "./Components/Home"
import Register from './Components/Register'
import Login from './Components/Login'
import { Route,Routes } from 'react-router-dom'
import Private from "./Components/Private"
import Sidenavbar from './Components/Sidenavbar'
import Social from './Components/Social'
import International from "./Components/International"
import Politics from './Components/Politics'
import Sports from './Components/Sports'
import Nature from './Components/Nature'
import H from './Components/H';
import Details from './Components/Details'
import National from './Components/National'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <Sidenavbar/>
    <Routes>
   {/* <Route path="/" element={ <Home/>}/> */}
   {/* <Route path='/homes' element={<H/>}/> */}
           <Route path="/news/:id" element={<Details/>} />

    <Route path='/register' element={<Register/>}/>
    
    <Route path="/login" element={<Login/>} />
       <Route path='/' element={<H/>}/>

    <Route path="/dashboard" element={
      <Private>
    <Sidenavbar/>
    

        <Home/>
      </Private>
    }></Route>
    <Route path="/dashboard/social" element={<Social />}  />
    <Route path="/dashboard/international" element={<International/>}/>
    <Route path="/dashboard/politics"  element={<Politics/>} />
    <Route path="/dashboard/sports"  element={<Sports/>} />
    <Route path="/dashboard/nature"  element={<Nature/>} />
    <Route path='/dashboard/national' element={<National/>}/>
    </Routes>
     
        
    </>
  )
}

export default App
