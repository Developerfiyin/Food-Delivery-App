import { createContext, use } from "react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { food_items } from "../food";
export const dataContext = createContext();
const userContext = ({ children }) => {

  let [Input, setInput] = useState(""); 
  let [showcart, setShowcart] = useState(false);
  let [cate, setCate] = useState(food_items);
  let user = {Input, setInput, cate, setCate, showcart, setShowcart} 

  return (
    <div>
      <dataContext.Provider value={user}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default userContext;
