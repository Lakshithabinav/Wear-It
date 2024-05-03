import { configureStore } from "@reduxjs/toolkit";
import currentpageRuducer from "../slice/currentpageSlice";
import cartReducer from "../slice/cartSlice";

export  const store  = configureStore({
    reducer:{
        currentpage : currentpageRuducer,
        cartitem   : cartReducer,   
    }
})