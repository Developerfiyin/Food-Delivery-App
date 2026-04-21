import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItems: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
        );
      } else {
        state.push(action.payload);
      }
    },
    RemoveItems: (state, action) => {
      return state.filter((items) => items.id !== action.payload);
    },
    IncreamentQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item,
      );
    },

     DecreamentQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item,
      );
    },
  },
});

export const { AddItems, RemoveItems, IncreamentQty, DecreamentQty } = cartSlice.actions;
export default cartSlice.reducer;
