import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Category";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-slate-200 ">
      <Navbar />
        
        <div className="flex flex-wrap justify-center items-center gap-5 w-full ">

{Categories.map((category) => (
  <div key={category.id} className="flex flex-col bg-white gap-5 w-35.5 h-37.5 items-start p-5 justify-start
   shadow-xl rounded-lg  text-purple-500 text-[20px] hover:bg-purple-300 cursor-pointer transition-all duration-300
  
  
  ">
    {category.icon}
    <span>{category.name}</span>
  </div>
))}

        </div>
     
    </div>
  );
};

export default Home;
