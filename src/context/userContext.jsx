import React from "react";
export const userContext = createContext();

const userContext = ({ children }) => {
  let [input, setInput] = useState("");

  let data = {};
  return (
    <div>
      <userContext.Provider value={data}>{children}</userContext.Provider>
    </div>
  );
};

export default userContext;
