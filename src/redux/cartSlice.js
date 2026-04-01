
import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {

    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
})