import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Footer';
import Navbar1 from './Navbar1';
const H = ()=> {
  const navigate = useNavigate();
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return Math.floor(seconds / 60) + " minutes ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + " hours ago";
  return Math.floor(seconds / 86400) + " days ago";
};

  const images = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e",
  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9"
];

const [current, setCurrent] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


    const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/student/gets");
      setNews(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
   const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Navbar1/>



 <div className="relative w-full h-[500px] mt-16 overflow-hidden">

      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="news"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 
          ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Stay Updated with Latest News
        </h1>

        <p className="text-gray-200 mt-4 max-w-2xl">
          Get real-time updates from around the world. Politics, sports, technology, and more – all in one place.
        </p>

        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold">
          Explore News
        </button>

      </div>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer 
            ${index === current ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </div>



     <div className="max-w-7xl mx-auto px-4 py-6 mt-20">

      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item._id}
             onClick={() => navigate(`/news/${item._id}`)}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 cursor-pointer transition"
          >
            {/* Image */}
            <img
              src={`http://localhost:3000/${item.thumbnail}`}
              alt="news"
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              {/* <p className="text-gray-600 text-sm mt-2">
                {item.short_description}
              </p> */}

              <div className="flex justify-between mt-3 text-sm text-gray-500">
                <span>{item.category}</span>
                {/* <span>{item.language}</span> */}
                {/* <span>{item.createdAt}</span> */}
                
 <span> {timeAgo(item.createdAt)}
</span>  
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    <Footer/>
    </>
   )
}

export default H