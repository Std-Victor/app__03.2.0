import { combineReducers } from "redux";

import productReducer from "./Product-Reducer/product.reducer";
import shopReducer from "./Shop-Reducer/shop.reducer";
import cartReducer from "./Cart/cart.reducer";

export default combineReducers({
  product: productReducer,
  shop: shopReducer,
  cart: cartReducer,
});
