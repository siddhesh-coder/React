import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import openReducer from './toggleCartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    openCart: openReducer, 
  },
});

export default appStore;
