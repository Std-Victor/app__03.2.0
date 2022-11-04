import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import shopReducer from "./Shop-Reducer/shop.slice";
import productReducer from "./Product-Reducer/product.slice";
import cartReducer from "./Cart/cart.slice";
import userReducer from './user/user.slice'

const store = configureStore({
  reducer: {
    product: productReducer,
    shop: shopReducer,
    cart: cartReducer,
    user : userReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
