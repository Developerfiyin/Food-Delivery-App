import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="w-full h-25 flex justify-between items-center px-5 ">
      <div className="h-15 w-15 rounded-md shadow-xl flex items-center justify-center bg-white  ">
        <MdFastfood className="h-7.5 w-7.5 text-purple-500 " />
      </div>

      <form className=" h-15 w-[60%] gap-5 rounded-md shadow-xl  flex items-center px-5 bg-white ">
        <IoSearch className="h-5 w-5 text-purple-500" />
        <input
          type="text"
          placeholder="Search Items..."
          className=" w-full text-[20px] outline-none "
        />
      </form>

      <div className="h-15 w-15 rounded-md flex shadow-xl relative items-center justify-center bg-white  ">
        <span className="absolute top-0 right-2 font-bold text-purple-500 text-[18px]">0</span>
        <LuShoppingBag className="h-7.5 w-7.5 text-purple-500 " />
      </div>
    </div>
  );
};

export default Navbar;
