import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className=" w-full h-25 bg-slate-400 flex justify-between px-6 items-center ">
      <div className="h-15 w-15 bg-white flex justify-center items-center rounded-md ">
        <MdFastfood className="w-7.5 h-7.5 text-purple-400 shadow-xl" />
      </div>

      <form className="flex items-center shadow-md h-15 w-[60%] gap-5 bg-white px-5 py-2 rounded-md"> 
        <IoSearch className="text-purple-400 w-5 h-5 rounded-md "  />
        <input type="text" placeholder="Search Items...." className="w-full outline-none text-[20px]  " />
      </form>


      <div className=" h-15 w-15 bg-white flex relative justify-center items-center rounded-md">
        <span className="absolute top-0 right-2 font-bold text-purple-400">0</span>
        <LuShoppingBag className="w-7.5 h-7.5 text-purple-500 shadow-xl" />
      </div>
      

    </div>
  );
};

export default Navbar;
