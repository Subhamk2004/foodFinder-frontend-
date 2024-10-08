import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user:{
        email:"",
        isAuthenticated:false,
        firstname:"",
        location:""
    }
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logoutUser: (state) => {
            state.email = ""
            state.isAuthenticated = false
        },
        authenticateUser: (state, action) => {
            console.log(action.payload.email);
            
            state.email = action.payload.user.email
            state.firstname = action.payload.user.firstname
            state.location = action.payload.user.location
            state.isAuthenticated = true
        }
    }
})

export const {logoutUser, authenticateUser} = userSlice.actions;
let userReducer = userSlice.reducer;
export default userReducer;