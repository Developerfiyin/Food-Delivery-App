import React , {useState, createContext} from "react";
import { food_items } from "../food";

export const dataContext = createContext();

const UserContext = ({ children }) => {
      let [categ, Setcateg] = useState(food_items)

  let [input, setInput] = useState("");

  let [showcart, setShowcart] = useState(false)

  let data = {input, setInput, categ, Setcateg, showcart, setShowcart};

  let [data1, setData1] = useState("")
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default UserContext;
