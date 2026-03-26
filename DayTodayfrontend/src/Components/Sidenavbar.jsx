import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidenavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/news")
  ) {
    return null;
  }

  return (
    <>
       <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white text-black shadow-2xl px-3 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

       <nav
        className={`fixed top-0 left-0 h-full w-64 bg-black px-4 py-10 z-40
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <h1 className="text-3xl pt-4 font-bold text-orange-400 tracking-[2px] text-center">
          DayTodayNews
        </h1>

        <div className="my-8 space-y-4">
          <LinkItem to="/" label="Home" location={location} setOpen={setOpen} />
          <LinkItem to="/dashboard/sports" label="Sports" location={location} setOpen={setOpen} />
          <LinkItem to="/dashboard/politics" label="Politics" location={location} setOpen={setOpen} />
          <LinkItem to="/dashboard/social" label="Social" location={location} setOpen={setOpen} />
          <LinkItem to="/dashboard/international" label="International" location={location} setOpen={setOpen} />
          <LinkItem to="/dashboard/nature" label="Nature" location={location} setOpen={setOpen} />
          <LinkItem to="/dashboard/national" label="National" location={location} setOpen={setOpen} />
        </div>
      </nav>
    </>
  );
};

const LinkItem = ({ to, label, location, setOpen }) => {
  const isActive = location.pathname === to;

  return (
    <div className="text-center">
      <Link
        to={to}
        onClick={() => setOpen(false)}  
        className={`block px-3 py-2 rounded-md transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold"
            : "text-gray-300"
        }
        hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400
        hover:text-white hover:scale-105`}
      >
        {label}
      </Link>
    </div>
  );
};

export default Sidenavbar;