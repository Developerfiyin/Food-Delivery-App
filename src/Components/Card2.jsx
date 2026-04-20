import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

import image from "../assets/image1.avif";

const Card2 = () => {
  return (
    <div className="w-full h-30 p-2 shadow-lg flex justify-center ">
      <div className=" w-[60%] h-full  flex  gap-5">
        <div className="w-[60%] h-full bg-white overflow-hidden rounded-lg ">
          <img src={image} alt="Pancake" className=" object-cover " />
        </div>
        <div className="flex flex-col gap-5 w-[40%] h-full  ">
          <div className="text-lg font-semibold text-slate-500">Pancake</div>
          <div className="bg-slate-400 h-12.5 w-27.5 flex rounded-lg  overflow-hidden shadow-lg font-semibold border-2 border-purple-400 text-xl ">
            <button className="w-[30%] bg-white flex justify-center items-center text-purple-300 hover:bg-slate-100">
              -
            </button>
            <span className="w-[40%] h-full flex justify-center items-center text-lg  bg-slate-300 text-purple-400 ">
              0
            </span>
            <button className="w-[30%] bg-white flex justify-center items-center text-purple-300 hover:bg-slate-100 ">+ </button>
          </div>
        </div>
        
      </div>
       <div className=" flex flex-col justify-start items-end gap-6  ">
        <span className="text-xl text-purple-300 font-semibold "> $299</span>
        <RiDeleteBin5Line className=" w-7.5 h-7.5  text-red-400 "  />
      </div>
    </div>
  );
};

export default Card2;
