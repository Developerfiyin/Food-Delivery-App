import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food";

const Home = () => {

    let [categ, Setcateg] = useState( food_items)

    function filter(category) {
        if (category==="All") {
            Setcateg(food_items )

        } else{
         let newList =  food_items.filter((item) => (item.food_category===category ) ) 
            Setcateg(newList)
            
        }
    }
  return (
    <div className="w-full min-h-screen bg-fuchsia-100">
      <Navbar />
      <div className=" flex flex-wrap justify-center items-center gap-6 w-full ">
        {Categories.map((item) => {
          return (
            <div className="w-35 h-32.5 flex flex-col items-start justify-start gap-5 p-5 font-semibold shadow-xl
            hover:bg-purple-300 cursor-pointer transition-all duration-200 rounded-lg text-gray-500 text-[20px] bg-white" onClick={() => filter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>
    
    
    <div className= " w-full flex flex-wrap gap-5 px-5 jsutify-center items-center pt-8 pb-8 ">
 {categ.map((item) => (
  <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        ))}
    </div>
    </div>
  );
};

export default Home;
