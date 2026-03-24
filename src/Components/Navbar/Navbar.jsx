import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className="w-full h-25 flex justify-between items-center px-5 ">
      <div className="h-15 w-15 rounded-md shadow-xl flex items-center justify-center bg-white  ">
        <MdFastfood className="h-7.5 w-7.5 text-purple-500 " />
      </div>
      
        <form className="w-[60%] rounded-md shadow-xl h-15 flex items-center px-5 bg-white ">
          <IoSearch />
          <input type="text" placeholder="Search..." />
        </form>
      
      <div className="h-15 w-15 rounded-md flex shadow-xl items-center justify-center bg-white  ">
        <LuShoppingBag className="h-7.5 w-7.5 text-purple-500 " />
      </div>

          

    </div>
  );
};

export default Navbar;
