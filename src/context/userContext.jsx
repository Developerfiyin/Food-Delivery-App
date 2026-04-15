import { createContext } from "react";
import React from "react";
export const dataContext = createContext();
const userContext = ({ children }) => {

  let [Input, setInput] = useState("");

  let user = {  
    Input,
    setInput,
  };

  
  return <div>
  <dataContext.Provider value={user}>
  
  {children}
  </dataContext.Provider>
  
  </div>;
};

export default userContext;
