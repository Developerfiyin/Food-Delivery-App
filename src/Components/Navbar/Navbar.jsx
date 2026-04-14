import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className=" w-full h-25 bg-slate-400 flex justify-between  ">
      <div className="h-15 w-15 bg-white flex justify-center items-center ">
        <MdFastfood />
      </div>
      <form action="">
        <IoSearch />

        <input type="text" placeholder="Search Items...." />
      </form>


      <LuShoppingBag />
      hiwiejiwigjgj
    </div>
  );
};

export default Navbar;
