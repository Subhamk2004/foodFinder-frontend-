import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    total: Number(0)
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.total = action.payload;
        },
        deleteItem: (state, action) => {
            console.log(action.payload);
            state.total = Math.max(0, state.total - 1);
            console.log(state.total);
            
        }
    }
})

export const {deleteItem, addToCart} = cartSlice.actions;
let cartReducer = cartSlice.reducer;
export default cartReducer;