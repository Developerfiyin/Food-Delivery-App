import React from "react";
import { LuLeafyGreen } from "react-icons/lu";

import image1 from "../assets/image1.avif";
const Card = () => {
  return (
    <div className="w-75 h-75  ">
      <div></div>
      <img src={image1} alt="" />

      <div>Pancake</div>

      <div>
        <div>Rs 299/-</div>
        <div>
          <LuLeafyGreen /> <span> Veg</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
