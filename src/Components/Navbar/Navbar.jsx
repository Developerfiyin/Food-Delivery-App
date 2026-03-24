import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className="w-full h-25 flex justify-between items-center  ">
      <div className="h-15 w-15 flex items-center justify-center bg-white  ">
        <MdFastfood />
      </div>
      <div>
        <form action="">
          <IoSearch />
          <input type="text" placeholder="Search..." />
        </form>
      </div>

      <div className="h-15 w-15 flex items-center justify-center bg-white  ">
        <LuShoppingBag />
      </div>
    </div>
  );
};

export default Navbar;
