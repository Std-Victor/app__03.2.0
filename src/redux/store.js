import { configureStore } from "@reduxjs/toolkit";

import shopReducer from "./Shop-Reducer/shop.slice";
import productReducer from "./Product-Reducer/product.slice";
import cartReducer from "./Cart/cart.slice";

const store = configureStore({
  reducer: {
    product: productReducer,
    shop: shopReducer,
    cart: cartReducer,
  },
});

export default store;
