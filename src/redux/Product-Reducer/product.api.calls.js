import axios from "axios";
import {
  fetchProductStart,
  fetchProductSuccess,
  fetchProductError,
} from "./product.slice";

export const fetchProductData = async (dispatch) => {
  dispatch(fetchProductStart());
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductError());
  }
};
