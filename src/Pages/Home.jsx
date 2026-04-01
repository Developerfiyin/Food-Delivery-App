import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/userContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";


const Home = () => {
  let {categ, Setcateg, input, showcart, setShowcart } = useContext(dataContext)
  

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
      {!input > 0 ? <div className=" flex flex-wrap justify-center items-center gap-6 w-full ">
        {Categories.map((item) => {
          return (
            <div className="w-35 h-32.5 flex flex-col items-start justify-start gap-5 p-5 font-semibold shadow-xl
            hover:bg-purple-300 cursor-pointer transition-all duration-200 rounded-lg text-gray-500 text-[20px] bg-white" onClick={() => filter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div> : null}
      
    
    
     <div className= " w-full cursor-pointer flex flex-wrap gap-5 px-5 jsutify-center items-center pt-8 pb-8 ">
 {categ.map((item) => (
  <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        ))}
    </div>


<div className={`fixed top-0 h-full w-full md:w-[40%] right-0 bg-white transition-all cursor-pointer duration-500 shadow-xl p-6 ${showcart ? "translate-x-0" : "translate-x-full"}`} >
  <header className="w-full  items-center justify-between flex  ">
<span className="font-semibold  text-[18px] text-purple-500"> Order  Items</span>
<RxCross2 className="h-7.5 w-7.5 text-purple-500 text-[18px] hover:text-purple-600 cursor-pointer " onClick={ () => setShowcart(false)} />


{/* Taiwopeace20 paassword for byu pathway

name Taiwo_Fiyinfoluwa

     323 256 6386 
    323 256 6386
    323 256 6386  */}
  </header>

  <Card2 />
</div>



    </div>
  );
};

export default Home;
