import React , {useState, createContext}from "react";
export const dataContext = createContext();

const userContext = ({ children }) => {
  let [input, setInput] = useState("");

  let data = {input, setInput};
  return (
    <div>
      <userContext.Provider value={data}>{children}</userContext.Provider>
    </div>
  );
};

export default userContext;
