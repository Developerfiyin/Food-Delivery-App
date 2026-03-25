import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Category";
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-fuchsia-100">
      <Navbar />
      <div className=" flex flex-wrap justify-center items-center gap-6 w-full ">
        {Categories.map((item) => {
          return (
            <div className="w-35 h-32.5 flex flex-col items-start justify-start gap-5 p-5 font-semibold shadow-xl
            hover:bg-purple-300 cursor-pointer transition-all duration-200 rounded-lg text-gray-500 text-[20px] bg-white ">
              {item.icon}

              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
