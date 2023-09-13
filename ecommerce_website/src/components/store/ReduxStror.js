import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ProductSlice";

const store = configureStore({
  reducer: {
    carts: cartReducer,
  },
});

export default store;
