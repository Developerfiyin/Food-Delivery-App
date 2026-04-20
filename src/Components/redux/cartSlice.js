import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        AddItems: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { AddItems } = cartSlice.actions;
export default cartSlice.reducer;
                                                        