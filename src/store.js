import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import filterReducer from "./features/Filter/filterSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;
