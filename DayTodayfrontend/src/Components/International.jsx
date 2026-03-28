 import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
 const International=()=>{



  const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return Math.floor(seconds / 60) + " minutes ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + " hours ago";
  return Math.floor(seconds / 86400) + " days ago";
};

  const [student,setStudent]=useState([])
const gets=async()=>{
  // e.preventDefault()
  try{
    const get= await axios.get("http://localhost:3000/student/gets"
    
  );
  
console.log(get.data.data);
setStudent(get.data.data);
  }catch(err){
    console.log(err.message)
    alert(err.message)
  }
}

useEffect(()=>{
  gets()
},[])

const [openModal,setOpenModal] =useState(false)
const [title,setTitle]=useState("");
const [content,setContent]=useState("");
const [slug,setSlug]=useState("");
const [author,setAuthor]=useState("");
const [short_description,setShortdescription]=useState("");
const [source,setSource]=useState("");
const [category,setCategory]=useState("");
const [language,setLanguage]=useState("")
const [thumbnail,setThumbnail]=useState(null)
// const [category]
const add=async(e)=>{
e.preventDefault();
try{
  const token=localStorage.getItem("token")
console.log(token)

  const formData=new FormData();
  formData.append("title", title);
   formData.append("content",content);
formData.append("slug", slug + "-" + Date.now());
     formData.append("author",author)
     formData.append("short_description", short_description);
   formData.append("source",source);
   formData.append("category",category);
     formData.append("language",language);
     formData.append("thumbnail",thumbnail);
     console.log("thumbnail",);
    const addNews= await axios.post("http://localhost:3000/student/upload",
      formData,
      {
     headers:{
      Authorization:`Bearer ${token}`
     }
    })
    console.log(addNews.data);
  
    setTitle("");
    setContent("");
    setSlug("");
    setAuthor("");
    setCategory("");
    setLanguage("");
    setShortdescription("");
    setSource("");
    setThumbnail(null)
Swal.fire({
    text:"successfully added News",
    icon:"success",
          title:"Success"
})
gets()
}catch(err){
    console.log(err.message)
    Swal.fire({
        text:"news not added",
        icon:"error",
        title:"Error!"
    })
}
    }



const [modal2,setModal2]=useState(false)
const [updated,setUpdate]=useState({});
const [selectId,setSelectId]=useState(null);
     const updates=async(id)=>{
      // id.preventDefault();
      const formData=new FormData();
formData.append("title",title);
formData.append("content",content);
formData.append("slug", slug );
formData.append("author",author);
formData.append("short_description", short_description);
   formData.append("source",source);
   formData.append("category",category);
     formData.append("language",language);
    //  formData.append("thumbnail",thumbnail);
    if (thumbnail && typeof thumbnail !== "string") {
  formData.append("thumbnail", thumbnail);
}
      const token=localStorage.getItem("token")
      try{
const update=await axios.put(`http://localhost:3000/student/${id}`,formData,
  {
    headers:{
      Authorization:`Bearer ${token}`
    }
   }
);
console.log(update.data)
setUpdate(update.data)
Swal.fire({
  title:"Success",
  icon:"success",
  text:"successfully updated the news"
})
gets()
      }catch(err){
        console.log(err.message)
        Swal.fire({
  title:"Error!",
  icon:"error",
  text:"news not updated"
})
      }
    }






const [del,setDel]=useState({})
const deletes=async(id)=>{
  const token=localStorage.getItem("token");
  try{
    const deleted=await axios.delete(`http://localhost:3000/student/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    });
    console.log("deleted",deleted);
setDel(deleted);


  }catch(err){
    console.log(err.message)
  }
}





    return(
        <>
        <div className="lg:pl-65">

 <div className="box  bg-red-400 
                rounded-lg shadow-xl     py-5  h-50"> 

                <h1 className="text-3xl text-white  text-center mx-auto
                font-semibold ">
                   DayTodayNews </h1>
                
                <h1 className="text-xl pt-3 text-white  text-center mx-auto
                font-semibold ">
                   Social </h1>

                    <h1 className="text-sm   text-white  text-center mx-auto
                font-semibold ">
                   Stay updated with DayTodayNews to know or give any news on this platform related only 
                   Social news </h1>

                </div>


             <span className="justify-end flex my-2 px-2">   <button className="bg-blue-500 px-2 py-2
              cursor-pointer hover:scale-90 transition-all duration-100 rounded font-bold text-white 
                 " onClick={()=>{setOpenModal(true);
                   setTitle("");
    setContent("");
    setSlug("");
    setAuthor("");
    setCategory("");
    setLanguage("");
    setShortdescription("");
    setSource("");
    setThumbnail(null)}
                 }>Add News</button></span>


{openModal && (
 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-2 sm:px-4">

  <form className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">

    {/* CLOSE BUTTON */}
    <button
      type="button"
      className="absolute top-3 right-4 text-2xl sm:text-3xl text-gray-400 hover:text-red-500 transition"
      onClick={() => setOpenModal(false)}
    >
      &times;
    </button>

    {/* TITLE */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center sm:text-left">
      Add New Post
    </h2>

    {/* FORM GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

      {/* INPUT FIELD TEMPLATE */}
      {[
        ["Title", title, setTitle],
        ["Content", content, setContent],
        ["Slug", slug, setSlug],
        ["Author", author, setAuthor],
        ["Short Description", short_description, setShortdescription],
        ["Source", source, setSource],
      ].map(([label, value, setter]) => (
        <div key={label}>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
            {label}
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => setter(e.target.value)}
            placeholder={`Enter ${label}`}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>
      ))}

      {/* CATEGORY */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select category</option>
          <option value="Politics">Politics</option>
          <option value="nature">Nature</option>
          <option value="international">International</option>
          <option value="Sports">Sports</option>
          <option value="national">National</option>
          <option value="Social">Social</option>
        </select>
      </div>

      {/* LANGUAGE */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
          Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </select>
      </div>

      {/* FILE */}
      <div className="sm:col-span-2">
        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
          Upload Image
        </label>
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 cursor-pointer text-sm"
        />
      </div>
    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-6 sm:mt-8">
      <button
        type="submit"
        onClick={add}
        className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 
        rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 active:scale-90 cursor-pointer  transition font-semibold"
      >
        Add Post
      </button>
    </div>

  </form>
</div>
)}



{/* <button className="relative left-200 bg-green-600 cursor-pointer shadow-85  px-3 py-1" onClick={gets} >Refresh</button> */}

{modal2 && (
 <div

  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-2 sm:px-4"
>
  
  <form
    onClick={(e) => e.stopPropagation()}
    className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
  >

    {/* CLOSE BUTTON */}
    <button
      type="button"
      onClick={() => setModal2(false)}
      className="absolute top-3 right-4 text-2xl sm:text-3xl text-gray-400 hover:text-rose-500 transition"
    >
      &times;
    </button>

    {/* HEADING */}
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center sm:text-left">
      Update Post
    </h2>

    {/* FORM GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

      {[
        ["Title", title, setTitle],
        ["Content", content, setContent],
        ["Slug", slug, setSlug],
        ["Author", author, setAuthor],
        ["Short Description", short_description, setShortdescription],
        ["Source", source, setSource],
      ].map(([label, value, setter]) => (
        <div key={label}>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
            {label}
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => setter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
        </div>
      ))}

      {/* CATEGORY */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select category</option>
          <option value="Politics">Politics</option>
          <option value="nature">Nature</option>
          <option value="international">International</option>
          <option value="Sports">Sports</option>
          <option value="national">National</option>
          <option value="Social">Social</option>
        </select>
      </div>

      {/* LANGUAGE */}
      <div>
        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
          Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </select>
      </div>

      {/* FILE */}
      <div className="sm:col-span-2">
        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
          Upload Image
        </label>
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 cursor-pointer text-sm"
        />
      </div>
    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-6 sm:mt-8">
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          updates(selectId);
          setModal2(false)
        }}
        className="w-full sm:w-auto bg-gradient-to-r from-blue-500
         to-indigo-600 text-white px-6 sm:px-8 py-2.5 rounded-lg shadow-md
          hover:from-blue-600 hover:to-indigo-700 active:scale-90 cursor-pointer transition font-semibold"
      >
        Update Post
      </button>
    </div>

  </form>
</div>
)}

                 
                  <div className="overflow-x-auto">
  <table className="w-full max-w-7xl mx-auto border-collapse rounded-lg shadow-2xl">
    
     <thead className="bg-gray-500 text-white ">
      <tr>
        <th className="px-4 py-3 text-left">Title</th>
        <th className="px-4 py-3 text-left">Category</th>
        <th className="px-4 py-3 text-left">Language</th>
        <th className="px-4 py-3 text-left">Source</th>
        <th className="px-4 py-3 text-left">Date</th>
        <th className="px-4 py-3 text-center">Actions</th>
      </tr>
    </thead>

  
    <tbody className="bg-white text-black">
      {student.filter((v)=>v.category==="international")
      .map((v) => (
        <tr
          key={v._id}
          className="border-b hover:bg-gray-100 transition-all"
        >
          <td className="px-4 py-3">{v.title}</td>
          <td className="px-4 py-3">{v.category}</td>
          <td className="px-4 py-3">{v.language}</td>
          <td className="px-4 py-3">{v.source}</td>
          <td className="px-4 py-3">
    {new Date(v.createdAt).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })}
</td>

           <td className="px-4 py-3 flex justify-center gap-2">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded-md
              hover:bg-blue-600 hover:scale-95 transition"
              onClick={() => {
                setTitle(v.title)
                setContent(v.content)
                setLanguage(v.language)
                setCategory(v.category)
                setSlug(v.slug)
                setAuthor(v.author)
                setSource(v.source)
                setThumbnail(v.thumbnail)
                setShortdescription(v.short_description)
                setModal2(true)
                setSelectId(v._id)
              }}
            >
              Edit
            </button>

            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md
              hover:bg-red-600 hover:scale-95 transition"
              onClick={() => {deletes(v._id)
                ,gets
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>

  </table>
</div>

              {/* // </div> */}
          
        </div>
        </>
    )
}
export default International
