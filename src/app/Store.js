import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reduxSilces/UserSlice.js';
import cartReducer from "../reduxSilces/cartSlice.js";

export const Store = configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
})