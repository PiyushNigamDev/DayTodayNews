import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "../../Footer";

const Details = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const navigate = useNavigate();


const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return Math.floor(seconds / 60) + " minutes ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + " hours ago";
  return Math.floor(seconds / 86400) + " days ago";
};


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://daytodaynews.onrender.com/student/${id}`
        );
        setNews(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchNews();
  }, [id]);

  if (!news) return <h1 className="text-center mt-10">Loading...</h1>;

  return (
    <>

    <Navbar1/>




    <div className="bg-gray-100 min-h-screen py-16 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="m-4 text-blue-600 hover:underline text-sm"
        >
          ← Back to News
        </button>

        {/* Thumbnail */}
        <img
          src={`https://daytodaynews.onrender.com/${news.thumbnail}`}
          alt="news"
          className="w-full h-[400px] object-cover"
        />

        {/* Content */}
        <div className="p-6">

          {/* Category Badge */}
          <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            {news.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
            {news.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-3 border-b pb-3">
            <span><b>By:</b> {news.author}</span>
            <span><b>Language:</b> {news.language}</span>
          <span><b>Date:</b> {new Date(news.createdAt).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })}</span>
          </div>

          {/* Short Description */}
          <p className="mt-5 text-lg italic text-gray-600 border-l-4 border-red-500 pl-4">
            {news.short_description}
          </p>

          {/* Main Content */}
          <div className="mt-6 text-lg leading-relaxed text-gray-800 space-y-4">
            {news.content}
          </div>

          {/* Divider */}
          <div className="border-t mt-8 pt-5 text-sm text-gray-600">

            {/* Source */}
            <p>
              <b>Source:</b>{" "}
              <a
                href={news.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {news.source}
              </a>
            </p>

            {/* Slug */}
            <p className="mt-2">
              <b>Slug:</b> {news.slug}
            </p>

          </div>

        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Details;