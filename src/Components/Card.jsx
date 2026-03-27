import React from "react";
import { LuLeafyGreen } from "react-icons/lu";

import image1 from "../assets/image1.avif";
const Card = (name, id, price, type, image) => {
  return (
    <div className="w-75 p-4 rounded-lg  h-100 bg-white flex flex-col gap-3 shadow-lg ">
      <div className="overflow-hidden  w-full h-[60%] rounded-lg ">
        <img src={image1} alt="" className="object-cover " />
      </div>

      <div className="text-2xl font-semibold ">Pancake</div>

      <div className=" w-full flex justify-between items-center ">
        <div className="tex-xl font-bold text-purple-500  ">Rs 299/-</div>
        <div className="flex justify-center items-center gap-2 text-purple-500 text-lg font-semibold ">
          <LuLeafyGreen /> <span> Veg</span>
        </div>
      </div>
      <button className=" w-full p-3 rounded-lg bg-purple-300 text-gray-500 hover:bg-purple-500 transition-all duration-200"> Add to Cart </button>
    </div>
  );
};

export default Card;
