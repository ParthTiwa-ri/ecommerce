import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import filterReducer from "./features/Filter/filterSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
  },
});

export default store;
