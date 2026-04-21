import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food";
import { useState } from "react";
import { dataContext } from "../context/userContext";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  const { input, setInput, cate, setCate, showcart, setShowcart } =
    useContext(dataContext);

  function filterItems(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newfoodList = food_items.filter(
        (item) => item.food_category === category,
      );
      setCate(newfoodList);
    }
  }

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryFee + taxes);
  console.log(subtotal);

  return (
    <div className="w-full min-h-screen bg-slate-200 ">
      <Navbar />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full ">
          {Categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col bg-white gap-5 w-35.5 h-37.5 items-start p-5 justify-start
            shadow-xl rounded-lg  text-purple-500 text-[20px] hover:bg-purple-300 cursor-pointer transition-all duration-300"
              onClick={() => filterItems(category.name)}
            >
              {category.icon}
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-5 px-5 justify-center items-center  pt-8 pb-8  ">
        {cate.map((items) => (
          <Card
            name={items.food_name}
            image={items.food_image}
            price={items.price}
            id={items.id}
            items={items.food_type}
          />
        ))}
      </div>

      <div
        className={`w-full md:w-[40vw] h-full bg-white shadow-xl flex flex-col items-center overflow-auto fixed top-0 right-0 p-6 transition-all duration-300 ${showcart ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="w-full flex justify-between items-center ">
          <span className="text-purple-400 text-[18px] font-semibold ">
            {" "}
            Order Items
          </span>
          <RxCross2
            className="text-purple-400 text-[18px] font-semibold h-7.5 w-7.5 cursor-pointer hover:text-purple-600"
            onClick={() => setShowcart(false)}
          />
        </header>

        <div className="w-full flex flex-col gap-5 mt-9 items-center">
          {items.map((items) => (
            <Card2
              name={items.name}
              price={items.price}
              image={items.image}
              id={items.id}
              qty={items.qty}
            />
          ))}
        </div>
        <div className="w-full border-t-2 border-b-2  border-gray-500 mt-7 flex flex-col gap-4 p-8 ">
          <div className="w-full flex justify-between items-center ">
            <span className="text-xl font-semibold text-gray-500 ">
              Subtotal
            </span>
            <span className="font-semibold text-lg text-purple-400">
              $ {subtotal}
            </span>
          </div>
          <div>
            <div className="w-full flex justify-between items-center ">
              <span className="text-xl font-semibold text-gray-500 ">
                DeliveryFee
              </span>
              <span className="font-semibold text-lg text-purple-400">
                $ {deliveryFee}
              </span>
            </div>
          </div>

          <div className="w-full flex justify-between items-center ">
            <span className="text-xl font-semibold text-gray-500 ">Taxes</span>
            <span className="font-semibold text-lg text-purple-400 ">
              $ {taxes}
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between items-center p-9 ">
          <span className="text-2xl font-semibold text-gray-500 ">Total</span>
          <span className="font-semibold text-lg text-purple-400 ">
            $ {total}
          </span>
        </div>

        <button className="w-full p-3 rounded-lg bg-purple-500 text-white hover:bg-purple-300 transition-all duration-200">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Home;
