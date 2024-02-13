import { configureStore } from "@reduxjs/toolkit";
import productRecuder from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    product: productRecuder,
  },
});

export default store;
