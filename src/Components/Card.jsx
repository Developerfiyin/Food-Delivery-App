import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


const Card = ({name, id, price, type, image}) => {
  let dispatch = useDispatch()

  return (
    <div className="w-75 p-4 rounded-lg  h-100 bg-white flex flex-col gap-3 shadow-lg hover:border-2 border-purple-400 ">
      <div className="overflow-hidden  w-full h-[60%] rounded-lg ">
        <img src={image} alt="" className="object-cover " />
      </div>
      <div className="text-2xl font-semibold "> {name} </div>
      <div className=" w-full flex justify-between items-center ">
        {" "}
        {id}
        <div className="text-xl font-bold text-purple-500  ">{price} </div>
        <div className="flex justify-center items-center gap-2 text-purple-500 text-lg font-semibold ">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}{" "}
          <span> {type}</span>
        </div>
      </div>
      <button className=" w-full p-3 rounded-lg bg-purple-300 text-gray-500 hover:bg-purple-500 transition-all duration-200">
        onclick={() => dispatch(addToCart({ id, name, price, image }))}
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
