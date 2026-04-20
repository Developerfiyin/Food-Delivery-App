import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext } from "react";
import { useEffect } from "react";
import { food_items } from "../../food";
import { dataContext } from "../../context/userContext";


const Navbar = () => {



    let {Input, setInput, cate, setCate, showcart, setShowcart} = useContext(dataContext);
  useEffect(() => {
     let newList = food_items.filter((item) => item.food_name.includes(Input) || item.food_name.toLowerCase().includes(Input) || item.food_name.toUpperCase().includes(Input));
   setCate(newList)
  }, [Input])

  let items = useSelector(state => state.cart )

  return (
    <div className=" w-full h-25 bg-slate-200 flex justify-between px-6 items-center md:px-8 ">
      <div className="h-15 w-15 bg-white flex justify-center items-center rounded-md ">
        <MdFastfood className="w-7.5 h-7.5 text-purple-400 shadow-xl" />
      </div>

      <form className="flex  items-center shadow-md h-15 w-[45%] gap-5 bg-white px-5 py-2 rounded-md" onSubmit={(e) => e.preventDefault()} >
        <IoSearch className="text-purple-400 w-5 h-5 rounded-md "  />
        <input type="text" placeholder="Search Items...." className="w-full outline-none text-[16px] md:text-[20px] " onChange={(e) => setInput(e.target.value)} />
      </form>

    
      <div className=" h-15 w-15 bg-white flex relative cursor-pointer justify-center items-center rounded-md" onClick={() => setShowcart(true)}>
        <span className="absolute top-0 right-2 font-bold text-purple-400 text-[18px]">{items.length } </span>
        <LuShoppingBag className="w-7.5 h-7.5 text-purple-500 shadow-xl" />
      </div>

    </div>
  );
};

export default Navbar;
