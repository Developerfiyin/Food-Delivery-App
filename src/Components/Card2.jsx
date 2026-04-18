import React from "react";

import image from "../assets/image1.avif";

const Card2 = () => {
  return (
    <div className="w-full h-30 bg-red-600 p-2 ">
      <div className=" w-[60%] h-full bg-purple-600 flex ">
        <div className="w-[60%] h-full bg-white overflow-hidden rounded-lg">
          <img src={image} alt="Pancake" className=" object-cover"/>
        </div>
        <div className="flex flex-col gap-5 w-[40%] h-full ">
          <div className="text-lg font-semibold text-gray-600">Pancake</div>
          <div className="bg-slate-400 ">

            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </div>z
      <div></div>
    </div>
  );
};

export default Card2;
