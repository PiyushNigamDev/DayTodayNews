// import {Link} from "react-router-dom"
// const Home=()=>{
//     return(
//         <>






//         <div className=" pl-65 py-2">

//             <div className="box grid grid-cols-4 gap-2   mx-auto">
//                 <div className="box  bg-orange-500
//                 rounded-lg shadow-xl max-w-xs     py-1  h-40"> 
                
//                 <h1 className="text-xl py-15  text-center mx-auto
//                 font-semibold text-gray-700 text-white">
//                    Social </h1>

//                 </div>


//                 <div className="box   bg-yellow-300
//                 rounded-lg shadow-xl max-w-xs     py-1  h-40"> 
                
//                 <h1 className="text-xl py-15  text-center mx-auto
//                 font-semibold text-gray-700 text-white">
//                    International </h1>

//                 </div>



//                 <div className="box  bg-pink-400 
//                 rounded-lg shadow-xl max-w-xs     py-1  h-40"> 
                
//                 <h1 className="text-xl py-15  text-center text-white mx-auto
//                 font-semibold text-gray-700">
//                    Nature </h1>

//                 </div>


//                  <div className="box  bg-red-400 
//                 rounded-lg shadow-xl max-w-xs     py-1  h-40"> 
                
//                 <h1 className="text-xl py-15  text-center mx-auto
//                 font-semibold text-gray-700 text-white">
//                    Politics </h1>

//                 </div>  


//  <div className="box  bg-blue-500 
//                 rounded-lg shadow-xl max-w-xs     py-1  h-40"> 
                
//                 <h1 className="text-xl py-15  text-center mx-auto
//                 font-semibold text-gray-700 text-white">
//                    Sports </h1>

//                 </div>



//                  <div className="box     bg-green-500 
//                 rounded-lg shadow-xl max-w-xs     py-1  h-40"> 
                
//                 <h1 className="text-xl py-15  text-center mx-auto
//                 font-semibold text-gray-700  text-white">International
//                  </h1>

//                 </div>
// </div>
//               {/* <span className="justify-end flex my-2 px-2">   <button className="bg-blue-500 px-2 py-2
//               cursor-pointer hover:scale-90 transition-all duration-100 rounded font-bold text-white 
//                  ">Add News</button></span>
//               */}
//             {/* <h1  >EEEEEEEEEeeeeeeeeeeeeeeeeeeeee</h1> */}

//             {/* <div className="my-2 cursor-pointer py-5 shadow-xl bg-white px-5 max-w-5xl mx-auto rounded-xl">
// <h1 className="font-bold text-black text-2xl">Ahead of Maharashtra civic polls, Raj Thackeray targets Adani Group's expansion</h1>
// <h1 className="text-blue-400 font-bold">India News <span className="text-gray-400 
// font-semibold ">.Publishes 30 mins ago</span></h1>
//             </div>



//              <div className="my-2 cursor-pointer py-5 shadow-xl bg-white px-5 max-w-5xl mx-auto rounded-xl">
// <h1 className="font-bold text-black text-2xl">Ahead of Maharashtra civic polls, Raj Thackeray targets Adani Group's expansion</h1>
// <h1 className="text-blue-400 font-bold">India News <span className="text-gray-400 
// font-semibold ">.Publishes 30 mins ago</span></h1>
//             </div>




//              <div className="my-2 cursor-pointer py-5 shadow-xl bg-white px-5 max-w-5xl mx-auto rounded-xl">
// <h1 className="font-bold text-black text-2xl">Ahead of Maharashtra civic polls, Raj Thackeray targets Adani Group's expansion</h1>
// <h1 className="text-blue-400 font-bold">India News <span className="text-gray-400 
// font-semibold ">.Publishes 30 mins ago</span></h1>
//             </div>





//              <div className="my-2 cursor-pointer py-5 shadow-xl bg-white px-5 max-w-5xl mx-auto rounded-xl">
// <h1 className="font-bold text-black text-2xl">Ahead of Maharashtra civic polls, Raj Thackeray targets Adani Group's expansion</h1>
// <h1 className="text-blue-400 font-bold">India News <span className="text-gray-400 
// font-semibold ">.Publishes 30 mins ago</span></h1>
//             </div>




//              <div className="my-2 cursor-pointer py-5 shadow-xl bg-white px-5 max-w-5xl mx-auto rounded-xl">
// <h1 className="font-bold text-black text-2xl">Ahead of Maharashtra civic polls, Raj Thackeray targets Adani Group's expansion</h1>
// <h1 className="text-blue-400 font-bold">India News <span className="text-gray-400 
// font-semibold ">.Publishes 30 mins ago</span></h1>
//             </div>



//              <div className="my-2 cursor-pointer py-5 shadow-xl bg-white px-5 max-w-5xl mx-auto rounded-xl">
// <h1 className="font-bold text-black text-2xl">Ahead of Maharashtra civic polls, Raj Thackeray targets Adani Group's expansion</h1>
// <h1 className="text-blue-400 font-bold">India News <span className="text-gray-400 
// font-semibold ">.Publishes 30 mins ago</span></h1>
//             </div>

//              <div className="my-2 cursor-pointer py-5 shadow-xl bg-white px-5 max-w-5xl mx-auto rounded-xl">
// <h1 className="font-bold text-black text-2xl">Ahead of Maharashtra civic polls, Raj Thackeray targets Adani Group's expansion</h1>
// <h1 className="text-blue-400 font-bold">India News <span className="text-gray-400 
// font-semibold ">.Publishes 30 mins ago</span></h1>
//             </div> */}



  





//         </div>
//         </>
//     )
// }
// export default Home


import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    { name: "Social", color: "bg-orange-500", path: "/social" },
    { name: "International", color: "bg-yellow-400", path: "/international" },
    { name: "Nature", color: "bg-pink-400", path: "/nature" },
    { name: "Politics", color: "bg-red-400", path: "/politics" },
    { name: "Sports", color: "bg-blue-500", path: "/sports" },
    { name: "National", color: "bg-green-500", path: "/national" },
  ];

  return (
    <div className="md:pl-64 p-4">
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {cards.map((card) => (
          <Link key={card.name} to={card.path}>
            <div
              className={`${card.color} h-40 rounded-xl shadow-lg flex items-center justify-center
              hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            >
              <h1 className="text-xl font-bold text-white">
                {card.name}
              </h1>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Home;