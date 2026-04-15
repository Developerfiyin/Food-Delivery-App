import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food"
import { useState } from "react";
import { dataContext } from "../context/userContext";
import { useContext } from "react";

const Home = () => {

  const {input, setInput, cate, setCate} = useContext(dataContext);

  function filterItems(category) {
    if(category === "All") {
      setCate(food_items);
    } else {
      let newfoodList = food_items.filter((item) => item.food_category  === category);
      setCate(newfoodList);
    }
  }   
  return (


    <div className="w-full min-h-screen bg-slate-200 ">
      <Navbar />
      <div className="flex flex-wrap justify-center items-center gap-5 w-full ">
        {Categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col bg-white gap-5 w-35.5 h-37.5 items-start p-5 justify-start
            shadow-xl rounded-lg  text-purple-500 text-[20px] hover:bg-purple-300 cursor-pointer transition-all duration-300" onClick={() => filterItems(category.name)}
          >
            {category.icon}
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-5 px-5 justify-center items-center  pt-8 pb-8  ">
        {cate.map((items) => (
          <Card name={items.food_name} image={items.food_image}  price={items.price} id={items.id}
          items={items.food_type} />

        ))}
      </div>
    </div>
  );
};  

export default Home;
