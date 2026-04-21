import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItems: (state, action) => {
            state.push(action.payload);
        },
        RemoveItems : (state, action) => {
            return state.filter((items) => items.id !== action.payload)
        }
    }
});

export const { AddItems, RemoveItems } = cartSlice.actions;
export default cartSlice.reducer;
