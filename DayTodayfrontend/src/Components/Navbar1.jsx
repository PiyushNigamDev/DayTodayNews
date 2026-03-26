 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { FaUserCircle } from "react-icons/fa";
function Navbar1() {
  const [search, setSearch] = useState("");
  const [results,setResults]=useState([]);
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSearch = async () => {
    try {
      let res = await fetch(`http://localhost:3000/search?q=${search}`)
      const data = await res.json()
      console.log(data);
      setResults(data);
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/20 text-white shadow border-b border-white/20">
        
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl font-bold text-orange-400 ">
              DayTodayNews
            </h1>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center max-w-md w-full shadow rounded bg-white px-3 py-1">
            <input
              type="text"
              placeholder="Search news..."
              className="flex-1 outline-none text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch
              onClick={handleSearch}
              className="text-gray-600 cursor-pointer hover:text-orange-500"
            />
          </div>

          {results.length > 0 && (
    <div className="absolute top-16 left-0 w-full flex justify-center z-40">
      
      <div className="w-full max-w-2xl bg-white shadow-lg rounded mt-2 max-h-80 overflow-y-auto">
        {results.map((item) => (
          <div key={item._id} className="border-b p-3 hover:bg-gray-100">
            
            <Link to={`/news/${item._id}`}>
              <h2 className="font-semibold text-black cursor-pointer">
                {item.title}
              </h2>
            </Link>

          </div>
        ))}
      </div>

    </div>
  ) }

          {/* Desktop Account */}
         <div className="hidden md:block ">
  <Link
    to="/login"
    className="flex items-center gap-2  px-4 py-2 rounded-full font-semibold 
    hover:scale-95 shadow-2xl transition text-gray-700 "
  >
    <FaUserCircle className="text-3xl shadow-2xl rounded-2xl" />
    
  </Link>
</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-black ">
            {menuOpen ? (
              <FaTimes onClick={() => setMenuOpen(false)} className="text-xl  cursor-pointer" />
            ) : (
              <FaBars onClick={() => setMenuOpen(true)} className="text-xl cursor-pointer" />
            )}
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-white/10">

            {/* Search */}
            <div className="flex items-center shadow rounded bg-white px-3 py-1">
              <input
                type="text"
                placeholder="Search news..."
                className="flex-1 outline-none text-black"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch
                onClick={handleSearch}
                className="text-gray-600 cursor-pointer"
              />
            </div>

            {/* Account */}
            <Link
              to="/login"
              className="block text-center bg-orange-500 px-4 py-2 rounded-full font-semibold text-white"
            >
              Account
            </Link>

          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar1