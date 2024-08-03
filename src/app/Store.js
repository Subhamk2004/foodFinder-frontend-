import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../reduxSilces/UserSlice.js';

export const Store = configureStore({
    reducer:{
        user:userReducer
    }
})