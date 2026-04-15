import { createContext } from "react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { food_items } from "../food";
export const dataContext = createContext();
const userContext = ({ children }) => {

  let [cate, setCate] = useState(food_items);
  let [Input, setInput] = useState("");

  let user = {Input, setInput,cate, setCate};


  return <div>
  <dataContext.Provider value={user}>
  {children}
  </dataContext.Provider>
  
  </div>;
};

export default userContext;
