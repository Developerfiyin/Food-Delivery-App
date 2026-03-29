import React, {useContext, useEffect} from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../../context/userContext";
import { food_items } from "../../food";

const Navbar = () => {
  let {input, setInput, categ, Setcateg} = useContext(dataContext)
  useEffect(() => {
    let newList =  food_items.filter((item) => (item.food_name.toLowerCase().includes(input.toLowerCase()) ) )
    Setcateg(newList)
  }, [input])


  return (
    <div className="w-full h-25 flex justify-between items-center px-5 md:px-8">
      <div className="h-15 w-15 rounded-md shadow-xl flex items-center justify-center bg-white  ">
        <MdFastfood className="h-7.5 w-7.5 text-purple-500 " />
      </div>

      <form className=" h-15 w-[45%] gap-5 md:w-[70%] rounded-md shadow-xl  flex items-center px-5 bg-white "
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="h-5 w-5 text-purple-500" />
        <input
          type="text"
          placeholder="Search Items..."
          className=" w-full text-[16px] md:text-[20px] outline-none "
          onChange={ (e) => setInput(e.target.value)} value={input}
        />
      </form>

      <div className="h-15 w-15 rounded-md flex shadow-xl relative items-center justify-center bg-white  ">
        <span className="absolute top-0 right-2 font-bold text-purple-500 text-[18px]">
          0
        </span>
        <LuShoppingBag className="h-7.5 w-7.5 text-purple-500 " />
      </div>
    </div>
  );
};

export default Navbar;
