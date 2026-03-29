import React , {useState, createContext}from "react";
export const dataContext = createContext();

const userContext = ({ children }) => {
  let [input, setInput] = useState("");

  let data = {input, setInput};
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default userContext;
